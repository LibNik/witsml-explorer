import React, { useState } from "react";
import styled from "styled-components";
import { UpdateWellboreLogsAction } from "../../../contexts/modificationActions";
import ModificationType from "../../../contexts/modificationType";
import { HideModalAction } from "../../../contexts/operationStateReducer";
import OperationType from "../../../contexts/operationType";
import { createTrimLogObjectJob } from "../../../models/jobs/trimLogObjectJob";
import LogObject from "../../../models/logObject";
import { truncateAbortHandler } from "../../../services/apiClient";
import JobService, { JobType } from "../../../services/jobService";
import LogObjectService from "../../../services/logObjectService";
import { colors } from "../../../styles/Colors";
import { WITSML_INDEX_TYPE_DATE_TIME, WITSML_INDEX_TYPE_MD } from "../../Constants";
import ModalDialog from "../ModalDialog";
import AdjustDateTimeModal from "./AdjustDateTimeModal";
import AdjustNumberRangeModal from "./AdjustNumberRangeModal";

export interface TrimLogObjectModalProps {
  dispatchNavigation: (action: UpdateWellboreLogsAction) => void;
  dispatchOperation: (action: HideModalAction) => void;
  logObject: LogObject;
}

const TrimLogObjectModal = (props: TrimLogObjectModalProps): React.ReactElement => {
  const { dispatchNavigation, dispatchOperation, logObject } = props;
  const [log] = useState<LogObject>(logObject);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<string | number>();
  const [endIndex, setEndIndex] = useState<string | number>();
  const [confirmDisabled, setConfirmDisabled] = useState<boolean>();

  const onSubmit = async (updatedLog: LogObject) => {
    setIsLoading(true);
    const trimLogObjectJob = createTrimLogObjectJob(log, startIndex, endIndex);
    await JobService.orderJob(JobType.TrimLogObject, trimLogObjectJob);
    refreshWellboreLogs(updatedLog);
  };

  const refreshWellboreLogs = (log: LogObject) => {
    const controller = new AbortController();

    async function getLogObject() {
      const freshLogs = await LogObjectService.getLogs(log.wellUid, log.wellboreUid, controller.signal);
      dispatchNavigation({ type: ModificationType.UpdateLogObjects, payload: { wellUid: log.wellUid, wellboreUid: log.wellboreUid, logs: freshLogs } });
      setIsLoading(false);
      dispatchOperation({ type: OperationType.HideModal });
    }

    getLogObject().catch(truncateAbortHandler);

    return () => controller.abort();
  };

  const toggleConfirmDisabled = (isValid: boolean) => {
    setConfirmDisabled(!isValid);
  };

  return (
    <>
      {log && (
        <ModalDialog
          heading={`Adjust start/end index for ${log.name}`}
          content={
            <>
              {log.indexType === WITSML_INDEX_TYPE_DATE_TIME && (
                <AdjustDateTimeModal
                  minDate={log.startIndex}
                  maxDate={log.endIndex}
                  onStartDateChanged={setStartIndex}
                  onEndDateChanged={setEndIndex}
                  onValidChange={toggleConfirmDisabled}
                />
              )}
              {log.indexType === WITSML_INDEX_TYPE_MD && (
                <AdjustNumberRangeModal
                  minValue={indexToNumber(logObject.startIndex)}
                  maxValue={indexToNumber(logObject.endIndex)}
                  onStartValueChanged={setStartIndex}
                  onEndValueChanged={setEndIndex}
                  onValidChange={toggleConfirmDisabled}
                />
              )}
              <Warning>
                <strong>Warning:</strong> Adjusting start/end index will permanently remove data values outside selected range
              </Warning>
            </>
          }
          onSubmit={() => onSubmit(log)}
          isLoading={isLoading}
          confirmColor={"danger"}
          confirmText={"Adjust"}
          confirmDisabled={confirmDisabled}
          switchButtonPlaces
        />
      )}
    </>
  );
};

const indexToNumber = (index: string): number => {
  return Number(index.replace(/[^\d.-]/g, ""));
};

const Warning = styled.div`
  border: 1px solid ${colors.interactive.dangerResting};
  border-radius: 2px;
  padding: 1em;
  background-color: ${colors.interactive.dangerHighlight};
  color: ${colors.interactive.dangerHover};
  margin-top: 1em;
  width: 28em;
`;

export default TrimLogObjectModal;
