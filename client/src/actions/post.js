import axios from "axios";
import { setAlert } from "../actions/alert";

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES
} from "./types";

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Add like
export const addLike = postId => async dispatch => {
  try {
    //an array of likes is returned as res.data
    console.log("post ID: " + postId);
    const res = await axios.put(`/api/posts/like/${postId}`);
    
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data }
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// Remove like
export const removeLike = postId => async dispatch => {
  try {
    //an array of likes is returned as res.data
    const res = await axios.put(`/api/posts/unlike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data }
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}