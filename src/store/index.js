import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./users/reducer";
import productsReducer from "./products/reducer";
import transactionsReducer from "./transactions/reducer";
import imagesReducer from "./images/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  transactions: transactionsReducer,
  images: imagesReducer,
  shoppingCart: cartReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
