import {
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  ADD_NEW_USER_PENDING,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_FAILED,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  UPDATE_USER_PENDING,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_PENDING
} from "./constants";

//Using a default logged in user ID: 1, until authentication and login properly owrks.
const initialState = {
  all: [],
  err: {}
  // loggedInUser: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_PENDING:
    case ADD_NEW_USER_PENDING:
    case DELETE_USER_PENDING:
    case UPDATE_USER_PENDING:
    case FETCH_USER_PENDING:
      return state;
    case FETCH_ALL_USERS_SUCCESS:
    case FETCH_USER_SUCCESS:
      // case UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(USER => USER.id !== action.payload.id),
          action.payload
        ]
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(USER => USER.id !== action.payload.id)
      };

    case FETCH_ALL_USERS_FAILED:
    case ADD_NEW_USER_FAILED:
    case DELETE_USER_FAILED:
    case UPDATE_USER_FAILED:
    case FETCH_USER_FAILED:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
