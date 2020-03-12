import axios from "axios";
// import * as types from "./constants";
import {
  FETCH_ALL_PRODUCTS_PENDING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILED,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_PENDING,
  ADD_NEW_PRODUCT_FAILED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED
} from "./constants";

export const fetchAllProducts = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_PRODUCTS_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/products`);
    dispatch({
      type: FETCH_ALL_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_PRODUCTS_FAILED,
      payload: err
    });
  }
};

export const fetchProduct = id => async dispatch => {
  dispatch({
    type: FETCH_PRODUCT_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/products/${id}`);
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_FAILED,
      payload: err
    });
  }
};

// Add new PRODUCT
export const addProduct = newProduct => async dispatch => {
  dispatch({
    type: ADD_NEW_PRODUCT_PENDING
  });

  try {
    let response = await axios.post(
      `http://localhost:8080/products`,
      newProduct
    );
    dispatch({
      type: ADD_NEW_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_NEW_PRODUCT_FAILED,
      payload: err
    });
  }
};

// Delete a PRODUCT
export const deleteProduct = id => async dispatch => {
  dispatch({
    type: DELETE_PRODUCT_PENDING
  });
  try {
    let response = await axios.delete(`http://localhost:8080/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: DELETE_PRODUCT_FAILED,
      payload: err
    });
  }
};

// Update PRODUCT
export const updateProduct = updatedProduct => async dispatch => {
  dispatch({
    type: UPDATE_PRODUCT_PENDING
  });

  try {
    let response = await axios.patch(
      `http://localhost:8080/products`,
      updatedProduct
    );
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_PRODUCT_FAILED,
      payload: err
    });
  }
};
