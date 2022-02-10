import { combineReducers, createStore } from "redux";
import {listReducer} from "./reducers/listReducer";

const reducer = combineReducers({
    listReducer
})

const store = createStore(reducer);

export default store