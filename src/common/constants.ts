// Constants relating to errors

export enum UserErrors {
  USER_EXISTS = 'User Error: The user already exists',
  INVALID_USER_EMAIL_OR_PASSWORD = 'User Error: invalid email or password',
  USER_DOES_NOT_EXIST = 'User Error: The specified user does not exist',
  INVALID_CREDENTIALS = 'User Error: Invalid user credentials',
  INVALID_EMAIL = 'User Error: Email must be in valid format e.g. example@gmail.com',
  EMPTY_EMAIL = 'User Error: Email cannot be empty',
  PASSWORD_IS_TOO_SHORT = 'User Error: Password cannot be less than 4 characters',
  PASSWORD_IS_TWO_LONG = 'User Error: Password cannot be greater than 20 characters'
}

export enum JobErrors {
  JOB_NOT_FOUND = 'Job Error: Job does not exist',
  JOB_EXISTS = 'Job Error: The job already exists',
  SERVER_EXCEPTION = 'Job Error: Server Exception thrown.'
}

export enum SiteErrors {
  SITE_NOT_FOUND = 'Site Error: Site does not exist',
  SITE_EXISTS = 'Site Error: The site already exists',
  SERVER_EXCEPTION = 'Site Error: Server Exception thrown.',
  NAME_CAN_NOT_BE_BLANK = 'Name cannot be blank.',
  X_COORDINATE_MUST_BE_NUMER = 'Site Error: The X co-ordinate of location must be a valid number',
  Y_COORDINATE_MUST_BE_NUMER = 'Site Error: The Y co-ordinate of location must be a valid number'
}

export enum ActivityErrors {
  ACTIVITY_ID_NOT_FOUND = 'Activity Error: Activity record does not exist.',
  WELL_ID_IS_NOT_VALID = 'Activity Error: The wellId is not a valid Id',
  TOOL_PUSH_IS_NOT_VALID = 'Activity Error: The tool push number is not a valid Id',
  COMPANY_MAN_IS_NOT_VALID = 'Activity Error: The company man number is not a valid Id',
  CREW_NUMBER_IS_NOT_VALID = 'Activity Error: The crew number is not a valid Id',
  START_TIME_AND_END_TIME_MUST_BE_DIFFERENT = 'Activity Error: Start Time and End Time must be different'
}

export enum SafetyNotesErrors {
  SAFETY_NOTE_ID_NOT_FOUND = 'Safety Note Error: SafetyNote record does not exist.',
  CODE_1_IS_REQUIRED = 'Safety Note Error: Code 1 is required',
  CODE_2_IS_REQUIRED = 'Safety Note Error: Code 2 is required',
  START_TIME_AND_END_TIME_MUST_BE_DIFFERENT = 'Safety Note Error: Start Time and End Time must be different',
  DESCRIPTION_CAN_NOT_BE_BLANK = 'Safety Note Error: The description field cannot be blank.'
}

export enum ChartDataErrors {
  CHARTDATA_NOT_FOUND = 'Chart Data does not exist'
}

// Constants relating to TraySelector and trayData

export enum LayoutKeys {
  ACTIVITIES_WIDGET = 'ActivitiesWidget',
  JOBS_WIDGET = 'JobsWidget',
  SITES_WIDGET = 'SitesWidget',
  USERS_WIDGET = 'UsersWidget',
  SAFETY_NOTE_WIDGET = 'SafetyNotesWidget',
  TIME_HORIZONTAL_CHART = 'TimeScrollableHorizontalChart',
  DEPTH_HORIZONTAL_CHART = 'DepthScrollableHorizontalChart'
}

// CSS constants for MUI styles

export enum CSSconstants {
  DRAWER_WIDTH = 200,
  APP_CONTENT_CONTAINER_ELEVATION = 5,
  AUTO_HIDE_TIME_FORM_SNACKBAR = 4000
}

// Constant for snackbar messages

export enum SnackbarMessage {
  ADD_SAFETY_NOTE = 'Safety note was successfully created!',
  ADD_ACTIVITY = 'Activity was successfully created!',
  ADD_USER = 'User was successfully created!',
  ADD_JOB = 'Job was successfully created!',
  EDIT_JOB = 'New values for job were successfully saved!',
  ADD_SITE = 'Site was successfully created!',
  EDIT_SITE = 'New values for site were successfully saved!',
  IS_ONLINE = 'You are online',
  IS_OFFLINE = 'Ups, you are offline!'
}
