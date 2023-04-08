import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";

export const rootReducer = combineReducers({
    usersReducer
})