import React, {useEffect, Fragment} from 'react';
import { View, Text } from 'react-native';
//import { AppLoading } from 'expo';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//1 - LOADING SCREEN
function LoadingScreen(props) {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setTimeout(()=> {
            props.navigation.navigate('App');
        }, 1000)
    }, []);

    return <Fragment></Fragment>;
};

//2 - MAIN SCREEN
import HomeStack from "./modules/home"

//3 - ROUTES STACK
const RoutesStack = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: HomeStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;