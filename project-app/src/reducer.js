import{
LOGIN_STATUS,
CLIENT,
ACTIONS,
} from './constants';

export const initialState = {
error: '',
username: '',
loginStatus: LOGIN_STATUS.PENDING,
isMessagePending: false,
messages: {},
lastAddedMessageId: '',
applicationid: '',
successfulApplicationId: '',
applied:{},
};

function reducer(state, action) {
  switch(action.type) {

    case ACTIONS.LOG_IN:
      return {
        ...state,
        error: '',
        loginStatus: LOGIN_STATUS.LOGGEDIN,
        username: action.username,
      };

    case ACTIONS.START_LOADING_MESSAGES:
      return {
        ...state,
        error: '',
        isMessagePending: true, 
      };
    case ACTIONS.SUCCESS_APPLICATION:
      return {
        ...state,
        successfulApplicationId: action.fetchedId,
      };

    case ACTIONS.LOG_OUT:
      return {
        ...state,
        error: '',
        isMessagePending: false,
        messages: {},
        loginStatus: LOGIN_STATUS.NOTLOGGED,
        lastAddedMessageId: '',
        username: '',
        applicationid: '',
        successfulApplicationId: '',
        applied: {},
      };

      case ACTIONS.APPLY:
      return {
        ...state,
        applicationid: action.id,
      };

    case ACTIONS.REPORT_ERROR:
      return {
        ...state,
        error: action.error || 'ERROR',
      };

      case ACTIONS.APPLIED:
        return {
          ...state,
          applied: action.id,
        };


    case ACTIONS.ADD_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
        },
      };

    default:
      throw new Error({ error: CLIENT.UNKNOWN_ACTION, detail: action });
  }
}

export default reducer;
