import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreenView from '../feature/auth/signup/SignUpScreenView';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen 
          name="SignUpScreenView"
          component={SignUpScreenView}
          options={{ headerShown: false }} // Hide the header for this screen
        />

    {/* <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Hide the header for this screen
        />
      

        <Stack.Screen 
          name="ForgotPassScreen"
          component={ForgotPassScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />

        

        <Stack.Screen 
          name="ForgotPassOtpScreen"
          component={ForgotPassOtpScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        /> */}
  </Stack.Navigator>
);

export default AuthNavigator;