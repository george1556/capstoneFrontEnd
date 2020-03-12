import axios from "axios";
// import * as types from "./constants";
import {
  FETCH_ALL_IMAGES_PENDING,
  FETCH_ALL_IMAGES_SUCCESS,
  FETCH_ALL_IMAGES_FAILED,
  // ADD_NEW_IMAGE_SUCCESS,
  // ADD_NEW_IMAGE_PENDING,
  // ADD_NEW_IMAGE_FAILED,
  // UPDATE_IMAGE_PENDING,
  // UPDATE_IMAGE_FAILED,
  // UPDATE_IMAGE_SUCCESS,
  // DELETE_IMAGE_FAILED,
  // DELETE_IMAGE_PENDING,
  // DELETE_IMAGE_SUCCESS,
  FETCH_IMAGE_PENDING,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILED
} from "./constants";

export const fetchAllImages = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_IMAGES_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/images`);
    dispatch({
      type: FETCH_ALL_IMAGES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_IMAGES_FAILED,
      payload: err
    });
  }
};

export const fetchImage = id => async dispatch => {
  dispatch({
    type: FETCH_IMAGE_PENDING
  });
  try {
    let response = await axios.get(`http://localhost:8080/images/${id}`);
    dispatch({
      type: FETCH_IMAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_IMAGE_FAILED,
      payload: err
    });
  }
};

// Add new IMAGE
// export const addNewIMAGE = newIMAGE => async dispatch => {
//   dispatch({
//     type: ADD_NEW_IMAGE_PENDING
//   });

//   try {
//     let response = await axios.post(
//       `http://localhost:8000/IMAGEs`,
//       newIMAGE
//     );
//     dispatch({
//       type: ADD_NEW_IMAGE_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: ADD_NEW_IMAGE_FAILED,
//       payload: err
//     });
//   }
// };

// // Delete a IMAGE
// export const deleteIMAGE = id => async dispatch => {
//   dispatch({
//     type: DELETE_IMAGE_PENDING
//   });
//   try {
//     let response = await axios.delete(`http://localhost:8000/IMAGEs/${id}`);
//     dispatch({
//       type: DELETE_IMAGE_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: DELETE_IMAGE_FAILED,
//       payload: err
//     });
//   }
// };

// // Update IMAGE
// export const updateIMAGE = (updateIMAGE, id) => async dispatch => {
//   dispatch({
//     type: UPDATE_IMAGE_PENDING
//   });

//   try {
//     let response = await axios.patch(
//       `http://localhost:8000/IMAGEs/${id}`,
//       updateIMAGE
//     );
//     dispatch({
//       type: UPDATE_IMAGE_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: UPDATE_IMAGE_FAILED,
//       payload: err
//     });
//   }
// };
