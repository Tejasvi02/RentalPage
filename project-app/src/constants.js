export const CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
  UNKNOWN_ACTION: 'unknownAction',
  };
  
  
export const SERVER = {
  AUTH_MISSING:'authentication is missing',
  AUTH_INSUFFICIENT:'Insufficient authorization',
  REQUIRED_USERNAME:'username is required',
  MESSAGE_MISSING: 'noSuchId', 
  };
  
export const MESSAGES= {
  [CLIENT.NETWORK_ERROR]:'Its a network error, please check connection',
  [SERVER.AUTH_INSUFFICIENT]:'Username and/or password does not exsist',
  [SERVER.REQUIRED_USERNAME]:'Username Invalid',
  default: 'Something went wrong.  Please try again',
  };

  export const ACTIONS = {
    LOG_IN: 'logIn',
    LOG_OUT: 'logOut',
    START_LOADING_MESSAGES: 'startLoadingMessages',
    REPORT_ERROR: 'reportError',
  };
  
export const LOGIN_STATUS= {
  
      PENDING:'pending',
      NOTLOGGED:'notLogged',
      LOGGEDIN:'loggedIn',
    };