import { Action_Types } from "../contants/action-types";

export const completedTodoAction = (complTodoData) => {
    return {
        type: Action_Types.COMPLETED_TODO,
        payload: complTodoData
    }
}