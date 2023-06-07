import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from './styles';
import SvgSplash from '../../assets/img/icons/splash';

export default function SplashScreen() {
  return (
    <View style={styles.splash}>
      <StatusBar backgroundColor={'#000029'} barStyle="ligth-content" />
      <SvgSplash />
    </View>
  );
}
