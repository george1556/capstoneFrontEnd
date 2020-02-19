import {
  FETCH_ALL_PRODUCTS_PENDING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILED,
  ADD_NEW_PRODUCT_PENDING,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_FAILED,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_PENDING
} from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_PENDING:
    case ADD_NEW_PRODUCT_PENDING:
    case DELETE_PRODUCT_PENDING:
    case UPDATE_PRODUCT_PENDING:
    case FETCH_PRODUCT_PENDING:
      return state;
    case FETCH_ALL_PRODUCTS_SUCCESS:
    case FETCH_PRODUCT_SUCCESS:
      // case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case ADD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(PRODUCT => PRODUCT.id !== action.payload.id),
          action.payload
        ]
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(PRODUCT => PRODUCT.id !== action.payload.id)
      };

    case FETCH_ALL_PRODUCTS_FAILED:
    case ADD_NEW_PRODUCT_FAILED:
    case DELETE_PRODUCT_FAILED:
    case UPDATE_PRODUCT_FAILED:
    case FETCH_PRODUCT_FAILED:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
