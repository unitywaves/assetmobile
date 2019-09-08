import React, {useEffect, Fragment} from 'react';
import {useDispatch} from "react-redux";
//import {AppLoading} from 'expo';

import { checkLoginStatus } from "../utils";

export default function AuthLoading(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        checkLoginStatus(dispatch)
            .then(() => props.navigation.navigate('App'))
            .catch(() => props.navigation.navigate('Auth'));
    }, []);

    return <Fragment></Fragment>;
};