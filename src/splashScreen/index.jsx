import React, { useEffect,useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


import SvgSplash from '../../assets/img/icons/splash';
import * as Styled from './styles';

export default function SplashScreen() {
  const navigation = useNavigation(); 

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async loggedInUser => {
      if (loggedInUser) {
        await AsyncStorage.setItem('user', JSON.stringify(loggedInUser.uid));
        await AsyncStorage.setItem('infos', JSON.stringify(loggedInUser));
      }  
        const loginStatus = await AsyncStorage.getItem('log');
        console.log(loginStatus);
        if (loginStatus === 'false') {
          navigation.navigate('RegisterUser');
        } else if (loginStatus === 'true') {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Pre');
        }
      
    });
  
    return subscriber;
  }, []);
  

  return (
    <Styled.Container>
      <StatusBar backgroundColor={'#000029'} barStyle="ligth-content" />
      <SvgSplash />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </Styled.Container>
  );
}
