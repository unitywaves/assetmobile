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
function Main (){
    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>You Have Successfully Set Up Your App</Text>
        </View>
    );
}
const AppStack = createStackNavigator({ Main });

//3 - ROUTES STACK
const RoutesStack = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;