import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Producer from '../../telas/Producer'
import Home from '../../telas/Home';

const Stack = createNativeStackNavigator()

export default function ProducerRoutes({MainComponent = Home}) {

	return <Stack.Navigator> 
		<Stack.Screen name='HomeScreen' component={MainComponent}/>
		<Stack.Screen name='Producer' component={Producer}/>
	</Stack.Navigator>
}