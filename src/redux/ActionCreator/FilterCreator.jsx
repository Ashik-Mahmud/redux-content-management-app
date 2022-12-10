import { SET_FILTER } from "../actionTypes/FilterTypes";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
