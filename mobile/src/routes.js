import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Main from "./pages/Main";
import Detail from "./pages/Detail";
import New from "./pages/New";

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="New" component={New} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}