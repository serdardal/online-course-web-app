import { createStore, combineReducers } from "redux";

import { counterReducer, nameReducer } from "./Reducers/reducer";

const rootReducer = combineReducers({ counterReducer});

export const store = createStore(counterReducer);
