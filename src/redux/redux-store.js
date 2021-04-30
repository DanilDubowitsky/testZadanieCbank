import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";

let reducers = combineReducers({
    posts:postReducer
});
let store = createStore(reducers);
export default store;