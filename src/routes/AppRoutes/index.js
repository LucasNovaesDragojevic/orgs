import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BestProducersRoutes from "../BestProducers"
import ProducerRoutes from '../ProducerRoutes'

import home from '../../assets/home.svg'
import heart from '../../assets/heart.svg'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#2A9F85',
                tabBarInactiveTintColor: '#C7C7C7',
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color }) => {
                    let Icon = home
                    if (route.name === 'Best Producers') {
                        Icon = heart
                    }
                    return <Icon color={color} width={20} height={20}/>
                }
            })}>
            <Tab.Screen name='Home' component={ProducerRoutes}/>
            <Tab.Screen name='Best Producers' component={BestProducersRoutes} />
        </Tab.Navigator>
    </NavigationContainer>
}