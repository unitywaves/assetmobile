import {AsyncStorage} from "react-native";
import * as c from './constants';

export function getToken() {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiGet([c.TOKEN_KEY, c.USER_KEY], (err, stores) => {
            if (err) reject();
            else {
                let data = {};
                stores.map((result, i, store) => {
                    let key = store[i][0];
                    let val = store[i][1];

                    data[key] = val;
                });

                let token = data[c.TOKEN_KEY]; //get the token
                let user = data[c.USER_KEY]; //get the user data
                user = (user) ? JSON.parse(user) : {};

                if (token) resolve({token, user});
                else reject("No Token Found");
            }
        });
    });
};

// Save token and user data to Asyncstorage
export async function setToken(token, user = {}, dispatch) {
    try {
        let data = [[c.TOKEN_KEY, token], [c.USER_KEY, JSON.stringify(user)]]
        await AsyncStorage.multiSet(data);

        dispatch({type: c.LOGGED_IN, data: {user}});

        return true;
    } catch (err) {
        throw err;
    }
}

export function removeToken(dispatch) {
    try {
        const result = AsyncStorage.multiRemove([c.TOKEN_KEY, c.USER_KEY]);

        dispatch({type: c.LOGGED_OUT});

        return true;
    } catch (err) {
        throw err;
    }
}

export async function checkLoginStatus(dispatch) {
    try {
        const { token, user} = await getToken();

        //set the axios headers

        dispatch({type: c.LOGGED_IN, data: {user}});

        return;
    } catch (err) {
        throw err;
    }
};