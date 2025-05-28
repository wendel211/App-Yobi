import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/public/SplashScreen';
import RegisterScreen from '../screens/public/customer/RegisterScreen';
import LoginScreen from '../screens/public/customer/LoginScreen';
import ChooseProfileScreen from '../screens/public/ChooseProfileScreen';
import Onboarding1Screen from '../screens/public/onboarding/Onboarding1Screen';
import Onboarding2Screen from '../screens/public/onboarding/Onboarding2Screen';
import Onboarding3Screen from '../screens/public/onboarding/Onboarding3Screen';


export type RootStackParamList = {
  Splash: undefined;
  Register: undefined;
  Login: undefined;
  ChooseProfile: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
        <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
        <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
        <Stack.Screen name="ChooseProfile" component={ChooseProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
