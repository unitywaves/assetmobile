import * as t from './constants';

let initialState = { data:[] };

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.DATA_AVAILABLE:{
            let { users } = action.data;

            return {...state, data:users};
        }
        default:
            return state;

    }
};

export default dataReducer;