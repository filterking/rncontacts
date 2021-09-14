
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, SETTINGS } from "../constants/routeNames";
import Contacts from "../screens/contacts/index";
import Detail from "../screens/contacts/detail";
import Create from "../screens/contacts/create";
import Settings from "../screens/Settings/index";

const HomeNavigator = () => {
    const homeStack = createStackNavigator();
    return (
        <homeStack.Navigator initialRouteName={CONTACT_LIST}>
            <homeStack.Screen name={CONTACT_LIST} component={Contacts}></homeStack.Screen>  
            <homeStack.Screen name={CONTACT_DETAIL} component={Detail}></homeStack.Screen>
            <homeStack.Screen name="Create Contacts" component={Create}></homeStack.Screen>   
            <homeStack.Screen name={SETTINGS} component={Settings}></homeStack.Screen>      
        </homeStack.Navigator>
    );
};

export default HomeNavigator;