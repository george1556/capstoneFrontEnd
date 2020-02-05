import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./users/reducer";
// import moviesReducer from "./movies/reducer";
// import customersReducer from "./customers/reducer";
// import transactionsReducer from "./transactions/reducer";
// import customerTeeTimesReducer from "./customersteetimes/reducer";

const rootReducer = combineReducers({
  users: usersReducer
  //   movies: moviesReducer,
  //   customers: customersReducer,
  //   transactions: transactionsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
