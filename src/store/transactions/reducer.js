import {
  FETCH_ALL_TRANSACTIONS_PENDING,
  FETCH_ALL_TRANSACTIONS_SUCCESS,
  FETCH_ALL_TRANSACTIONS_FAILED,
  ADD_NEW_TRANSACTION_PENDING,
  ADD_NEW_TRANSACTION_SUCCESS,
  ADD_NEW_TRANSACTION_FAILED,
  DELETE_TRANSACTION_PENDING,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILED,
  UPDATE_TRANSACTION_PENDING,
  UPDATE_TRANSACTION_FAILED,
  UPDATE_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_FAILED,
  FETCH_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_PENDING
} from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTIONS_PENDING:
    case ADD_NEW_TRANSACTION_PENDING:
    case DELETE_TRANSACTION_PENDING:
    case UPDATE_TRANSACTION_PENDING:
    case FETCH_TRANSACTION_PENDING:
      return state;
    case FETCH_ALL_TRANSACTIONS_SUCCESS:
    case FETCH_TRANSACTION_SUCCESS:
      // case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_NEW_TRANSACTION_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(
            TRANSACTION => TRANSACTION.id !== action.payload.id
          ),
          action.payload
        ]
      };

    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          TRANSACTION => TRANSACTION.id !== action.payload.id
        )
      };

    case FETCH_ALL_TRANSACTIONS_FAILED:
    case ADD_NEW_TRANSACTION_FAILED:
    case DELETE_TRANSACTION_FAILED:
    case UPDATE_TRANSACTION_FAILED:
    case FETCH_TRANSACTION_FAILED:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
