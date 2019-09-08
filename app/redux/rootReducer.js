// Description: Root Reducer

import { combineReducers } from 'redux';

import authReducer from "../modules/auth/reducer.js"
import homeReducer from "../modules/home/reducer.js"

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer, authReducer });

export default rootReducer;