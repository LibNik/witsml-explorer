// URL Subdirectories
export const SERVERS_PATH = "servers";
export const WELLS_PATH = "wells";
export const WELLBORES_PATH = "wellbores";
export const OBJECT_GROUPS_PATH = "objectgroups";
export const OBJECTS_PATH = "objects";
export const LOG_TYPES_PATH = "logtypes";
export const LOG_CURVE_VALUES_PATH = "curvevalues";
export const JOBS_PATH = "jobs";
export const QUERY_PATH = "query";
export const SEARCH_PATH = "search";
export const MULTIPLE_LOGS = "multilogs";

// URL Params
export const SERVER_URL_PARAM = ":serverUrl";
export const WELL_UID_PARAM = ":wellUid";
export const WELLBORE_UID_PARAM = ":wellboreUid";
export const OBJECT_GROUP_PARAM = ":objectGroup";
export const OBJECT_UID_PARAM = ":objectUid";
export const LOG_TYPE_PARAM = ":logType";
export const FILTER_TYPE_PARAM = ":filterType";

// Route pathnames
export const SERVER_ROUTE_PATH = `${SERVERS_PATH}/${SERVER_URL_PARAM}`;
export const WELLS_VIEW_ROUTE_PATH = `${WELLS_PATH}`;
export const WELLSBORES_VIEW_ROUTE_PATH = `${WELLS_VIEW_ROUTE_PATH}/${WELL_UID_PARAM}/${WELLBORES_PATH}`;
export const OBJECT_GROUPS_VIEW_ROUTE_PATH = `${WELLSBORES_VIEW_ROUTE_PATH}/${WELLBORE_UID_PARAM}/${OBJECT_GROUPS_PATH}`;
export const OBJECTS_VIEW_ROUTE_PATH = `${OBJECT_GROUPS_VIEW_ROUTE_PATH}/${OBJECT_GROUP_PARAM}/${OBJECTS_PATH}`;
export const OBJECT_VIEW_ROUTE_PATH = `${OBJECTS_VIEW_ROUTE_PATH}/${OBJECT_UID_PARAM}`;
export const LOG_TYPES_VIEW_ROUTE_PATH = `${OBJECT_GROUPS_VIEW_ROUTE_PATH}/${OBJECT_GROUP_PARAM}/${LOG_TYPES_PATH}`;
export const LOG_OBJECTS_VIEW_ROUTE_PATH = `${LOG_TYPES_VIEW_ROUTE_PATH}/${LOG_TYPE_PARAM}/${OBJECTS_PATH}`;
export const LOG_OBJECT_VIEW_ROUTE_PATH = `${LOG_OBJECTS_VIEW_ROUTE_PATH}/${OBJECT_UID_PARAM}`;
export const LOG_CURVE_VALUES_VIEW_ROUTE_PATH = `${LOG_OBJECT_VIEW_ROUTE_PATH}/${LOG_CURVE_VALUES_PATH}`;
export const MULTI_LOGS_CURVE_INFO_LIST_VIEW_ROUTE_PATH = `${LOG_TYPES_VIEW_ROUTE_PATH}/${LOG_TYPE_PARAM}/${MULTIPLE_LOGS}`;
export const MULTI_LOGS_CURVE_VALUES_ROUTE_PATH = `${MULTI_LOGS_CURVE_INFO_LIST_VIEW_ROUTE_PATH}/${LOG_CURVE_VALUES_PATH}`;
export const JOBS_VIEW_ROUTE_PATH = `${JOBS_PATH}`;
export const QUERY_VIEW_ROUTE_PATH = `${QUERY_PATH}`;
export const SEARCH_VIEW_ROUTE_PATH = `${SEARCH_PATH}/${FILTER_TYPE_PARAM}`;

// Full route pathnames for navigation
export const WELLS_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${WELLS_VIEW_ROUTE_PATH}`;
export const WELLSBORES_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${WELLSBORES_VIEW_ROUTE_PATH}`;
export const OBJECT_GROUPS_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${OBJECT_GROUPS_VIEW_ROUTE_PATH}`;
export const OBJECTS_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${OBJECTS_VIEW_ROUTE_PATH}`;
export const OBJECT_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${OBJECT_VIEW_ROUTE_PATH}`;
export const LOG_TYPES_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${LOG_TYPES_VIEW_ROUTE_PATH}`;
export const LOG_OBJECTS_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${LOG_OBJECTS_VIEW_ROUTE_PATH}`;
export const LOG_OBJECT_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${LOG_OBJECT_VIEW_ROUTE_PATH}`;
export const LOG_CURVE_VALUES_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${LOG_CURVE_VALUES_VIEW_ROUTE_PATH}`;
export const MULTI_LOGS_CURVE_INFO_LIST_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${MULTI_LOGS_CURVE_INFO_LIST_VIEW_ROUTE_PATH}`;
export const MULTI_LOGS_CURVE_VALUES_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${MULTI_LOGS_CURVE_VALUES_ROUTE_PATH}`;
export const JOBS_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${JOBS_VIEW_ROUTE_PATH}`;
export const QUERY_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${QUERY_VIEW_ROUTE_PATH}`;
export const SEARCH_VIEW_NAVIGATION_PATH = `/${SERVER_ROUTE_PATH}/${SEARCH_VIEW_ROUTE_PATH}`;

export enum RouterLogType {
  TIME = "time",
  DEPTH = "depth"
}
