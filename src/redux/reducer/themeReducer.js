import { Action_Types } from "../contants/action-types";

const themeInitialState = {
    isChanged: false
}

export const themeReducer = (state = themeInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Action_Types.THEME_CHANGE:
            return {
                ...state,
                isChanged: payload
            }

        default:
            return state;
    }
}