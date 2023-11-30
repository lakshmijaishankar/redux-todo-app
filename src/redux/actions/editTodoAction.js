import { Action_Types } from "../contants/action-types";

export const editTodoTitle = (todoData) => {
    return {
        type: Action_Types.EDITETODO_TITLE,
        payload: todoData
    }
}