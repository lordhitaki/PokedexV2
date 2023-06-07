import React, { useContext } from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { Container } from './style';

import TabRoute from '../../routes/tabBar';

export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} />
      <TabRoute />
    </Container>
  );
}
