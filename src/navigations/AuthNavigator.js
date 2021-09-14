import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LOGIN, REGISTER } from "../constants/routeNames";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";

const AuthNavigator = () => {
    const authStack = createStackNavigator();
    return (
        <authStack.Navigator initialRouteName={Login} screenOptions={{ headerShown:false }}>
            <authStack.Screen name={LOGIN} component={Login}></authStack.Screen>  
            <authStack.Screen name={REGISTER} component={Register}></authStack.Screen>
                
        </authStack.Navigator>
    );
};

export default AuthNavigator;