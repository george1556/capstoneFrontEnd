import {
  ADD_NEW_CART_ITEM_FAILED,
  ADD_NEW_CART_ITEM_PENDING,
  ADD_NEW_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
  DELETE_CART_ITEM_PENDING,
  DELETE_CART_ITEM_SUCCESS,
  UPDATE_CART_FAILED,
  UPDATE_CART_PENDING,
  UPDATE_CART_SUCCESS,
  FETCH_CART_FAILED,
  FETCH_CART_SUCCESS,
  FETCH_CART_PENDING,
  UPDATE_CART_TOTAL_SUCCESS
} from "./constants";

const initialState = {
  cart: [],
  cartTotal: "",
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_ALL_PRODUCTS_PENDING:
    // case ADD_NEW_PRODUCT_PENDING:
    // case DELETE_PRODUCT_PENDING:
    // case UPDATE_PRODUCT_PENDING:
    // case FETCH_PRODUCT_PENDING:
    //   return state;
    // case FETCH_ALL_PRODUCTS_SUCCESS:
    // case FETCH_PRODUCT_SUCCESS:
    // case UPDATE_PRODUCT_SUCCESS:
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        cart: action
      };

    case UPDATE_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload
      };

    case UPDATE_CART_TOTAL_SUCCESS:
      return {
        ...state,
        cartTotal: action.payload
      };

    // case ADD_NEW_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     all: [...state.all, action.payload]
    //   };

    // case UPDATE_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     all: [
    //       ...state.all.filter(PRODUCT => PRODUCT.id !== action.payload.id),
    //       action.payload
    //     ]
    //   };

    // case DELETE_PRODUCT_SUCCESS:
    //   return {
    //     ...state,
    //     all: state.all.filter(PRODUCT => PRODUCT.id !== action.payload.id)
    //   };

    // case FETCH_ALL_PRODUCTS_FAILED:
    // case ADD_NEW_PRODUCT_FAILED:
    // case DELETE_PRODUCT_FAILED:
    // case UPDATE_PRODUCT_FAILED:
    // case FETCH_PRODUCT_FAILED:
    //   return {
    //     ...state,
    //     err: action.payload
    //   };
    default:
      return state;
  }
};
