import axios from "axios";
// import * as types from "./constants";
import {
  FETCH_ALL_TRANSACTIONS_PENDING,
  FETCH_ALL_TRANSACTIONS_SUCCESS,
  FETCH_ALL_TRANSACTIONS_FAILED,
  ADD_NEW_TRANSACTION_SUCCESS,
  ADD_NEW_TRANSACTION_PENDING,
  ADD_NEW_TRANSACTION_FAILED,
  UPDATE_TRANSACTION_PENDING,
  UPDATE_TRANSACTION_FAILED,
  UPDATE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILED,
  DELETE_TRANSACTION_PENDING,
  DELETE_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_PENDING,
  FETCH_TRANSACTION_SUCCESS,
  FETCH_TRANSACTION_FAILED
} from "./constants";

export const fetchAllTransactions = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_TRANSACTIONS_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/transactions`);
    dispatch({
      type: FETCH_ALL_TRANSACTIONS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_TRANSACTIONS_FAILED,
      payload: err
    });
  }
};

export const fetchTransaction = id => async dispatch => {
  dispatch({
    type: FETCH_TRANSACTION_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/transactions/${id}`);
    dispatch({
      type: FETCH_TRANSACTION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_TRANSACTION_FAILED,
      payload: err
    });
  }
};

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

// // Update PRODUCT
// export const updatePRODUCT = (updatePRODUCT, id) => async dispatch => {
//   dispatch({
//     type: UPDATE_PRODUCT_PENDING
//   });

//   try {
//     let response = await axios.patch(
//       `http://localhost:8000/PRODUCTs/${id}`,
//       updatePRODUCT
//     );
//     dispatch({
//       type: UPDATE_PRODUCT_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAILED,
//       payload: err
//     });
//   }
// };
