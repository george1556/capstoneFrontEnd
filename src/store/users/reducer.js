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
  FETCH_USER_PENDING,
  LOGIN_USER_PENDING,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from "./constants";

//Default loggedInUser with an id of 0 indicates no one is logged in.

const initialState = {
  all: [],
  err: {},
  loggedInUser: { id: 0 }

  //temporarily hardcoding admin for testing
  // loggedInUser: {
  //   id: 6,
  //   firstName: "George",
  //   lastName: "Howe",
  //   email: "",
  //   streetAddress: "",
  //   zipCode: "",
  //   city: "",
  //   state: "",
  //   admin: true,
  //   accountLocked: false,
  //   loginAttempts: 0,
  //   userName: "superadmin"
  // }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_PENDING:
    case ADD_NEW_USER_PENDING:
    case DELETE_USER_PENDING:
    case UPDATE_USER_PENDING:
    case FETCH_USER_PENDING:
    case LOGIN_USER_PENDING:
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

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload
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
    case LOGIN_USER_FAILED:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
