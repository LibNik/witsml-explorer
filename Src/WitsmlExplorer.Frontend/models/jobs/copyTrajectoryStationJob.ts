import { TrajectoryStationRow } from "../../components/ContentViews/TrajectoryView";
import Trajectory from "../trajectory";
import TrajectoryReference from "./trajectoryReference";

export interface CopyTrajectoryStationJob {
  source: TrajectoryStationReferences;
  target: TrajectoryReference;
}

export interface TrajectoryStationReferences {
  serverUrl: string;
  trajectoryReference: TrajectoryReference;
  trajectoryStationUids: string[];
}

export function parseStringToTrajectoryStationReferences(input: string): TrajectoryStationReferences {
  let jsonObject: TrajectoryStationReferences;
  try {
    jsonObject = JSON.parse(input);
  } catch (error) {
    throw new Error("Invalid input given.");
  }
  verifyRequiredProperties(jsonObject);

  return {
    serverUrl: jsonObject.serverUrl,
    trajectoryReference: jsonObject.trajectoryReference,
    trajectoryStationUids: jsonObject.trajectoryStationUids
  };
}

function verifyRequiredProperties(jsonObject: TrajectoryStationReferences) {
  const requiredProps = ["serverUrl", "trajectoryReference", "trajectoryStationUids"];
  const hasRequiredProperties = requiredProps.every((prop) => Object.prototype.hasOwnProperty.call(jsonObject, prop));
  if (!hasRequiredProperties) {
    throw new Error("Missing required fields.");
  }
}

export function createTrajectoryStationReferences(trajectoryStations: TrajectoryStationRow[], source: Trajectory, serverUrl: string): TrajectoryStationReferences {
  return {
    serverUrl: serverUrl,
    trajectoryReference: {
      wellUid: source.wellUid,
      wellboreUid: source.wellboreUid,
      trajectoryUid: source.uid
    },
    trajectoryStationUids: trajectoryStations.map((component) => component.uid)
  };
}

export function createCopyTrajectoryStationJob(sourceTrajectoryStationReferences: TrajectoryStationReferences, target: Trajectory): CopyTrajectoryStationJob {
  return {
    source: sourceTrajectoryStationReferences,
    target: {
      wellUid: target.wellUid,
      wellboreUid: target.wellboreUid,
      trajectoryUid: target.uid
    }
  };
}