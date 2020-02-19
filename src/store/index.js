import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./users/reducer";
import productsReducer from "./products/reducer";
import transactionsReducer from "./transactions/reducer";
import imagesReducer from "./images/reducer";
// import moviesReducer from "./movies/reducer";
// import customersReducer from "./customers/reducer";
// import transactionsReducer from "./transactions/reducer";
// import customerTeeTimesReducer from "./customersteetimes/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  transactions: transactionsReducer,
  images: imagesReducer
  //   movies: moviesReducer,
  //   customers: customersReducer,
  //   transactions: transactionsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
