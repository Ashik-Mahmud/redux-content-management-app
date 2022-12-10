import { CLEAR_FILTER, SET_FILTER_BY_TITLE } from "../actionTypes/FilterTypes";

const initialState = {
  byTitle: null,
  byCategory: null,
  byTag: null,
  byAuthor: null,
  byDate: null,
  isRecent: true,
  error: null,
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_BY_TITLE:
      return {
        ...state,
        byTitle: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        blogs: null,
      };
    default:
      return state;
  }
};

export default FilterReducer;
