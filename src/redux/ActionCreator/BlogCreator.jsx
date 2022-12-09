import {
  ADD_BLOG_FAIL,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
} from "../actionTypes/BlogTypes";

/* add blog creator */
export const addBlogRequest = () => {
  return (dispatch) => {
    dispatch({ type: ADD_BLOG_REQUEST });
  };
};

export const addBlogSuccess = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_BLOG_SUCCESS, payload: data });
  };
};

export const addBlogFail = (error) => {
  return (dispatch) => {
    dispatch({ type: ADD_BLOG_FAIL, payload: error });
  };
};
