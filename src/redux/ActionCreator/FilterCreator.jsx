import { SET_FILTER_BY_TITLE } from "../actionTypes/FilterTypes";

export const setFilterForTitle = (filter) => {
  return {
    type: SET_FILTER_BY_TITLE,
    payload: filter,
  };
};
