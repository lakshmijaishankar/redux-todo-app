import { Action_Types } from '../contants/action-types';

export const strikeTodoAction = (todoId) => {
    return {
        type: Action_Types.STRIKE_HAS_CHECKED,
        payload: todoId
    }
}