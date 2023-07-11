import React, { useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import SvgSplash from '../../assets/img/icons/splash';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    Qlqlrcoisa();
  }, []);

  async function Qlqlrcoisa() {
    const onboard = await AsyncStorage.getItem('onBoarding');
    if (onboard) {
      navigation.navigate('Pre');
    } else {
      navigation.navigate('Index');
    }
  }

  return (
    <Styled.Container>
      <StatusBar backgroundColor={'#000029'} barStyle="ligth-content" />
      <SvgSplash />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </Styled.Container>
  );
}
