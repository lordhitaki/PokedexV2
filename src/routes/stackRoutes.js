import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../pages/index/onBoarding01';
import Pre from '../pages/loginAndRegister';
import Create from '../pages/loginAndRegister/register/screenRegister';
import Login from '../pages/loginAndRegister/login';
import Login01 from '../pages/loginAndRegister/login/login01';
import LoadSuccess from '../pages/loginAndRegister/login/loadSuccess';
import RegisterEmail from '../pages/loginAndRegister/register/registerEmail';
import RegisterPassword from '../pages/loginAndRegister/register/registerPassword';
import RegisterUser from '../pages/loginAndRegister/register/registerUser';
import RegisterSuccess from '../pages/loginAndRegister/register/registerSuccess';
import Home from '../pages/home';
import ForgotPass from '../pages/loginAndRegister/login/forgotPassword';
import ForgotCode from '../pages/loginAndRegister/login/forgotPassword/forgotCode';
import ChangeEmail from '../pages/home/profile/changedEmail';
import ChangeName from '../pages/home/profile/ChangeName';
import Details from '../pages/details';
import SplashScreen from '../splashScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="Pre" component={Pre} options={{ headerShown: false }} />
      <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Login01" component={Login01} options={{ headerShown: false }} />
      <Stack.Screen name="LoadSuccess" component={LoadSuccess} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterEmail"
        component={RegisterEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterPassword"
        component={RegisterPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="RegisterUser" component={RegisterUser} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotCode" component={ForgotCode} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} options={{ headerShown: false }} />
      <Stack.Screen name="ChangeName" component={ChangeName} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
