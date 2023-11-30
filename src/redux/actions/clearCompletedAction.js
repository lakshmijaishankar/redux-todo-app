import { Action_Types } from "../contants/action-types";

export const clearCompletedTodoAction = () => {
    return {
        type: Action_Types.CLEAR_COMPLETED_TODO
    }
}
