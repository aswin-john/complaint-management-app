import { View, Text } from 'react-native'
import React from 'react'
import AuthNavigator from './AuthNavigator'

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
     <Stack.Navigator initialRouteName='AuthNavigator'>
        {/* <LoginScreen/> */}
        {/* <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide the header for this screen
        /> */}
        <Stack.Screen 
          name="AuthNavigator" 
          component={AuthNavigator} 
          options={{ headerShown: false }} // Hide the header for this screen
        />

        {/* <Stack.Screen 
          name="HomeNavigator" 
          component={HomeNavigator} 
          options={{ headerShown: false }} // Hide the header for this screen
        /> */}



      </Stack.Navigator>
  )
}

export default AppNavigator