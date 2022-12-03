import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BestProducers from '../../telas/BestProducers'
import ProducerRoutes from '../ProducerRoutes'
import BestProducersRoutes from "../BestProducers"

export default function AppRoutes() {
    const Tab = createBottomTabNavigator()
    
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ProducerRoutes}/>
            <Tab.Screen name='Best Producers' component={BestProducersRoutes} />
        </Tab.Navigator>
    </NavigationContainer>
}