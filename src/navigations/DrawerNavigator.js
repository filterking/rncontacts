import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigatior";
import AuthNavigator from "./AuthNavigator";

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>  
            <Drawer.Screen name="Auth" component={AuthNavigator}></Drawer.Screen>            
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;