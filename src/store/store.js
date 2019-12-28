import { createStore, combineReducers } from "redux";

import { userReducer } from "./Reducers/userReducer";
import { courseReducer } from "./Reducers/courseReducer";

const rootReducer = combineReducers({ userReducer, courseReducer });

export const store = createStore(rootReducer);
