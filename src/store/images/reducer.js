import {
  FETCH_ALL_IMAGES_PENDING,
  FETCH_ALL_IMAGES_SUCCESS,
  FETCH_ALL_IMAGES_FAILED,
  ADD_NEW_IMAGE_PENDING,
  ADD_NEW_IMAGE_SUCCESS,
  ADD_NEW_IMAGE_FAILED,
  DELETE_IMAGE_PENDING,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILED,
  UPDATE_IMAGE_PENDING,
  UPDATE_IMAGE_FAILED,
  UPDATE_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILED,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_PENDING
} from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_IMAGES_PENDING:
    case ADD_NEW_IMAGE_PENDING:
    case DELETE_IMAGE_PENDING:
    case UPDATE_IMAGE_PENDING:
    case FETCH_IMAGE_PENDING:
      return state;

    case FETCH_IMAGE_SUCCESS:
      // case UPDATE_IMAGE_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ALL_IMAGES_SUCCESS:
      // console.log("IMAGES ACTION.PAYLOAD: ", action.payload);
      return {
        ...state,
        // Return the array of sorted images, by product id
        all: action.payload.sort(function(a, b) {
          let keyA = a.product.id;
          let keyB = b.product.id;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        })
      };

    case ADD_NEW_IMAGE_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case UPDATE_IMAGE_SUCCESS:
      return {
        ...state,
        all: [
          ...state.all.filter(IMAGE => IMAGE.id !== action.payload.id),
          action.payload
        ]
      };

    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(IMAGE => IMAGE.id !== action.payload.id)
      };

    case FETCH_ALL_IMAGES_FAILED:
    case ADD_NEW_IMAGE_FAILED:
    case DELETE_IMAGE_FAILED:
    case UPDATE_IMAGE_FAILED:
    case FETCH_IMAGE_FAILED:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
