import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { getBlogSuccess } from "../ActionCreator/BlogCreator";

const GetBlogThunk = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${SERVER_URL}/blogs`);
    console.log("inside thunk", response.data?.data);
    dispatch(getBlogSuccess(response?.data?.data));
  };
};

export default GetBlogThunk;
