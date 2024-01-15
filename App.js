import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import Login from './components/login';
import Register from './components/register';
import Portofolio from './components/portofolio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='porto' component={Portofolio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 