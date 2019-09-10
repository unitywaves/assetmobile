// Description: Root Reducer

import { combineReducers } from 'redux';

import authReducer from "../modules/auth/reducer.js"
import homeReducer from "../modules/home/reducer.js"
import moviesReducer from "../modules/movies/reducer.js"

// Combine all the reducers
const rootReducer = combineReducers({ homeReducer, authReducer, moviesReducer });

export default rootReducer;