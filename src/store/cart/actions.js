// import axios from "axios";
// import * as types from "./constants";
import {
  // ADD_NEW_CART_ITEM_FAILED,
  // ADD_NEW_CART_ITEM_PENDING,
  // ADD_NEW_CART_ITEM_SUCCESS,
  // DELETE_CART_ITEM_FAILED,
  // DELETE_CART_ITEM_PENDING,
  // DELETE_CART_ITEM_SUCCESS,
  // UPDATE_CART_FAILED,
  // UPDATE_CART_PENDING,
  UPDATE_CART_SUCCESS,
  // FETCH_CART_FAILED,
  // FETCH_CART_SUCCESS,
  // FETCH_CART_PENDING,
  UPDATE_CART_TOTAL_SUCCESS
} from "./constants";

// export const fetchAllProducts = () => async dispatch => {
//   dispatch({
//     type: FETCH_ALL_PRODUCTS_PENDING
//   });
//   try {
//     let response = await axios.get(`http://localhost:8080/products`);
//     dispatch({
//       type: FETCH_ALL_PRODUCTS_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: FETCH_ALL_PRODUCTS_FAILED,
//       payload: err
//     });
//   }
// };

// export const fetchProduct = id => async dispatch => {
//   dispatch({
//     type: FETCH_PRODUCT_PENDING
//   });
//   try {
//     let response = await axios.get(`http://localhost:8080/products/${id}`);
//     dispatch({
//       type: FETCH_PRODUCT_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: FETCH_PRODUCT_FAILED,
//       payload: err
//     });
//   }
// };

// Add new PRODUCT
// export const addNewPRODUCT = newPRODUCT => async dispatch => {
//   dispatch({
//     type: ADD_NEW_PRODUCT_PENDING
//   });

//   try {
//     let response = await axios.post(
//       `http://localhost:8000/PRODUCTs`,
//       newPRODUCT
//     );
//     dispatch({
//       type: ADD_NEW_PRODUCT_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: ADD_NEW_PRODUCT_FAILED,
//       payload: err
//     });
//   }
// };

// // Delete a PRODUCT
// export const deletePRODUCT = id => async dispatch => {
//   dispatch({
//     type: DELETE_PRODUCT_PENDING
//   });
//   try {
//     let response = await axios.delete(`http://localhost:8000/PRODUCTs/${id}`);
//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: DELETE_PRODUCT_FAILED,
//       payload: err
//     });
//   }
// };

// Update PRODUCT
export const updateCart = updatedCart => async dispatch => {
  dispatch({
    type: UPDATE_CART_SUCCESS,
    payload: updatedCart
  });
};

export const updateCartTotal = updatedCart => async dispatch => {
  dispatch({
    type: UPDATE_CART_TOTAL_SUCCESS,
    payload: updatedCart
  });
};
