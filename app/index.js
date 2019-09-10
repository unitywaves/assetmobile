import React, {useEffect, Fragment} from 'react';
import { View, Text } from 'react-native';
//import { AppLoading } from 'expo';
import AuthStack, {AuthLoading} from "./modules/auth"

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//2 - MAIN SCREEN
//import HomeStack from "./modules/home"
import MoviesStack from "./modules/movies"

//3 - ROUTES STACK
const RoutesStack = createSwitchNavigator(
    {
        Loading: AuthLoading,
        Auth: AuthStack,
        App: MoviesStack
        //App: HomeStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;