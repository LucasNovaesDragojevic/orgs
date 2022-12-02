import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BestProducers from '../../telas/BestProducers'
import Home from '../../telas/Home';

export default function AppRoutes() {
    const Tab = createBottomTabNavigator()
    
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Best Producers' component={BestProducers} />
        </Tab.Navigator>
    </NavigationContainer>
}