import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { SERVER_URL } from "../config/config";
import { getBlogSuccess } from "./ActionCreator/BlogCreator";
import rootReducer from './reducers/rootReducers';
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const getAllBlogs = () => {
    return async (dispatch) => {
        const response = await fetch(`${SERVER_URL}/blogs`);
        const data = await response.json();
        dispatch(getBlogSuccess(data?.data));
    };
};

store.dispatch(getAllBlogs());
export default store;