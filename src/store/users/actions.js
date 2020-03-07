import axios from "axios";
// import * as types from "./constants";
import {
  FETCH_ALL_USERS_PENDING,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_PENDING,
  ADD_NEW_USER_FAILED,
  UPDATE_USER_PENDING,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  LOGIN_USER_FAILED,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_PENDING,
  LOGOUT_USER_SUCCESS
} from "./constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_USERS_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/users`);
    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

export const fetchUser = id => async dispatch => {
  dispatch({
    type: FETCH_USER_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/users/${id}`);
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_FAILED,
      payload: err
    });
  }
};

export const loginUser = user => async dispatch => {
  dispatch({
    type: LOGIN_USER_PENDING
  });
  try {
    let response = await axios.post(`http://localhost:8080/users/login`, user);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAILED,
      payload: err
    });
  }
};

export const logoutUser = () => async dispatch => {
  let clearUser = {
    id: 0
  };
  dispatch({
    type: LOGOUT_USER_SUCCESS,
    payload: clearUser
  });
};

// Add new USER
// export const addNewUser = newUser => async dispatch => {
//   dispatch({
//     type: ADD_NEW_USER_PENDING
//   });

//   try {
//     let response = await axios.post(
//       `http://localhost:8000/users`,
//       newUser
//     );
//     dispatch({
//       type: ADD_NEW_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: ADD_NEW_USER_FAILED,
//       payload: err
//     });
//   }
// };

// // Delete a USER
// export const deleteUser = id => async dispatch => {
//   dispatch({
//     type: DELETE_USER_PENDING
//   });
//   try {
//     let response = await axios.delete(`http://localhost:8000/USERs/${id}`);
//     dispatch({
//       type: DELETE_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: DELETE_USER_FAILED,
//       payload: err
//     });
//   }
// };

// // Update USER
// export const updateUser = (updateUSER, id) => async dispatch => {
//   dispatch({
//     type: UPDATE_USER_PENDING
//   });

//   try {
//     let response = await axios.patch(
//       `http://localhost:8000/USERs/${id}`,
//       updateUSER
//     );
//     dispatch({
//       type: UPDATE_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: UPDATE_USER_FAILED,
//       payload: err
//     });
//   }
// };
