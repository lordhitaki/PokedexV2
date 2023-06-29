import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import SvgSplash from '../../assets/img/icons/splash';

import * as Styled from './styles';

export default function SplashScreen() {
  return (
    <Styled.Container>
      <StatusBar backgroundColor={'#000029'} barStyle="ligth-content" />
      <SvgSplash />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </Styled.Container>
  );
}
