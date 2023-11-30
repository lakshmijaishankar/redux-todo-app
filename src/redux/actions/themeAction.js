import { Action_Types } from '../contants/action-types';

export const themeAction = isChanged => {
    return {
        type: Action_Types.THEME_CHANGE,
        payload: isChanged
    }
}