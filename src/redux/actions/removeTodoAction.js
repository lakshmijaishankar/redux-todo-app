import { Action_Types } from "../contants/action-types"
export const removeTodoAction = (todoId) => {
    return {
        type: Action_Types.REMOVE_SELECTED_TODO,
        payload: todoId
    }
}