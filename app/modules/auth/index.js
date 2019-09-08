import { createStackNavigator } from 'react-navigation-stack';

import AuthLoading from "./scenes/AuthLoading"
import Login from "./scenes/Login"
import Register from "./scenes/Register"

const AuthStack = createStackNavigator({ Login, Register } ,
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: {
            headerStyle: {backgroundColor: "#312E5B", borderBottomWidth: 0,},
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

export default AuthStack
export { AuthLoading };