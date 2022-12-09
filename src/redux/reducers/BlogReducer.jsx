import {
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  GET_ALL_BLOGS_FAIL,
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
} from "../actionTypes/BlogTypes";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_BLOG_SUCCESS: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.payload],
      };
    }

    case GET_ALL_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case GET_ALL_BLOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
