

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreenView from './src/feature/auth/signup/SignUpScreenView';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="SignUpScreenView" component={SignUpScreenView} />
      </Stack.Navigator> */}
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App;
