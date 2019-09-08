// Description: Root Reducer

import { combineReducers } from 'redux';

import homeReducer from "../modules/home/reducer.js"

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer });

export default rootReducer;