import { Action_Types } from "../contants/action-types";

export const addNewtodoAction = (todoData) => {
    return {
        type: Action_Types.ADD_NEW_TODO,
        payload: todoData
    }
}