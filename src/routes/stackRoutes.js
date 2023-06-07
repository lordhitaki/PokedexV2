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

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="RegisterUser">
      <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
      <Stack.Screen name="Pre" component={Pre} options={{ headerShown: false }} />
      <Stack.Screen name="Create" component={Create} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Login01" component={Login01} options={{ headerShown: false }} />
      <Stack.Screen name="LoadSuccess" component={LoadSuccess} options={{ headerShown: false }} />
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
      {/* <Stack.Screen
        name="RegisterSuccess"
        component={RegisterSuccess}
        options={{ headerShown: false }}
      />
      
      
      <Stack.Screen
        name="LoginEmail"
        component={LoginEmail}
        options={{ headerShown: false }}
      />
      
      
      <Stack.Screen
        name="CadastroC"
        component={CadastroC}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="Regioes"
        component={Regioes}
        options={{ headerShown: false }}
      />    
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ headerShown: false }}
      />     */}
    </Stack.Navigator>
  );
}
