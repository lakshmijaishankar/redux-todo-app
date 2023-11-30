import { combineReducers } from "redux";
import { todoReducer } from "../reducer/todoReducer";
import { themeReducer } from "../reducer/themeReducer";

export const reducer = combineReducers({
    todoReducer: todoReducer,
    themeReducer: themeReducer
})