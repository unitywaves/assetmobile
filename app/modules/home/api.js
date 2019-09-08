import axios from 'axios';

import * as c from './constants';

export function getData() {
    return new Promise((resolve, reject) => {
        //SAMPLE REQUEST
        const url = `${c.API_URL}${c.DEMO_DATA}`;

        axios.get(url)
            .then((resp) => resolve(resp.data))
            .catch(error => reject(error.message));
    });
}