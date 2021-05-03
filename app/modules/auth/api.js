import axios from 'axios';

import * as c from './constants';

export function register(data) {
    return new Promise((resolve, reject) => {
        axios.post(c.REGISTER, data)
            .then((resp) => resolve(resp.data))
            .catch(error => reject(handleError(error)));
    });
};

export function login(data) {
    return new Promise((resolve, reject) => {
        axios.post(c.LOGIN, data)
            .then((resp) => resolve(resp.data))
            .catch(error => reject(handleError(error)));
    });
};

export function forgotPassword(data) {
    return new Promise((resolve, reject) => {
        axios.post(c.FORGOT_PASSWORD, data)
            .then(({data}) => resolve(data))
            .catch(error => reject(handleError(error)));
    });
};

function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        let {data} = error.response;
        error = data.error;
    }

    if (error.hasOwnProperty("message")) error = error.message;

    return error;
}