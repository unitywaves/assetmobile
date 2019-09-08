import * as c from './constants';

let initialState = {
    isLoggedIn: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.LOGGED_IN:{
            let { data } = action;
            const { user } = data;

            return {...state, isLoggedIn: true, user};
        }

        case c.LOGGED_OUT:{
            return {...state, ...initialState};
        }

        default:
            return state;
    }
};

export default authReducer;