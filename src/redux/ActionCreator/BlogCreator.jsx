import {
  ADD_BLOG_FAIL,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  DELETE_BLOG_SUCCESS,
} from "../actionTypes/BlogTypes";

/* add blog creator */
export const addBlogRequest = () => {
  return { type: ADD_BLOG_REQUEST };
};

export const addBlogSuccess = (data) => {
  return {
    type: ADD_BLOG_SUCCESS,
    payload: data,
  };
};

export const addBlogFail = (error) => {
  return { type: ADD_BLOG_FAIL, payload: error };
};

// delete blog creator
export const deleteBlogSuccess = (id) => {
  return {
    type: DELETE_BLOG_SUCCESS,
    payload: id,
  };
};
