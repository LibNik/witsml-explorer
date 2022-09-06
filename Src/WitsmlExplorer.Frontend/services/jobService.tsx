import JobInfo from "../models/jobs/jobInfo";
import { ApiClient } from "./apiClient";
import CredentialsService from "./credentialsService";

export default class JobService {
  public static async orderJob(jobType: JobType, payload: Record<string, any>): Promise<any> {
    const response = await ApiClient.post(`/api/jobs/${jobType}`, JSON.stringify(payload));
    if (CredentialsService.getSourceServerCredentials()) {
      CredentialsService.removeSourceServerCredentials();
    }
    if (response.ok) {
      return response.body;
    } else {
      return "";
    }
  }

  public static async getJobInfos(username: string, abortSignal?: AbortSignal): Promise<JobInfo[]> {
    const response = await ApiClient.get(`/api/jobs/jobinfos/${username}`, abortSignal);
    if (response.ok) {
      return response.json();
    } else {
      return [];
    }
  }
}

export enum JobType {
  CreateWell = "CreateWell",
  CopyBhaRun = "CopyBhaRun",
  CopyLog = "CopyLog",
  CopyLogData = "CopyLogData",
  CopyRig = "CopyRig",
  CopyRisk = "CopyRisk",
  CopyTrajectory = "CopyTrajectory",
  CopyTrajectoryStations = "CopyTrajectoryStations",
  CopyTubular = "CopyTubular",
  CopyTubularComponents = "CopyTubularComponents",
  CreateWellbore = "CreateWellbore",
  CreateLogObject = "CreateLogObject",
  DeleteBhaRuns = "DeleteBhaRuns",
  DeleteCurveValues = "DeleteCurveValues",
  DeleteLogObjects = "DeleteLogObjects",
  DeleteMessageObjects = "DeleteMessageObjects",
  DeleteMnemonics = "DeleteMnemonics",
  DeleteRigs = "DeleteRigs",
  DeleteRisks = "DeleteRisks",
  DeleteWbGeometrys = "DeleteWbGeometrys",
  DeleteWell = "DeleteWell",
  DeleteWellbore = "DeleteWellbore",
  DeleteTrajectories = "DeleteTrajectories",
  DeleteTrajectoryStations = "DeleteTrajectoryStations",
  DeleteTubulars = "DeleteTubular",
  DeleteTubularComponents = "DeleteTubularComponents",
  ModifyBhaRun = "ModifyBhaRun",
  ModifyLogObject = "ModifyLogObject",
  ModifyMessageObject = "ModifyMessageObject",
  ModifyRig = "ModifyRig",
  ModifyRisk = "ModifyRisk",
  RenameMnemonic = "RenameMnemonic",
  ModifyTrajectoryStation = "ModifyTrajectoryStation",
  ModifyTubular = "ModifyTubular",
  ModifyTubularComponent = "ModifyTubularComponent",
  ModifyWbGeometry = "ModifyWbGeometry",
  ModifyWell = "ModifyWell",
  ModifyWellbore = "ModifyWellbore",
  TrimLogObject = "TrimLogObject",
  BatchModifyWell = "BatchModifyWell",
  ImportLogData = "ImportLogData"
}
