import { types } from "../types";

const initialState = {
    user: {},
    finished: false
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS_INFO:
            return { ...state, user: action.payload }
        case types.FINISHED:
            return { ...state, finished: true }
        case types.NOT_FINISHED:
            return { ...state, finished: false }

        default: return state
    }
}