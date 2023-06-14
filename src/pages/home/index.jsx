import React, { useContext, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import { Container } from './style';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import TabRoute from '../../routes/tabBar';

export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    // Aqui você pode adicionar qualquer lógica que deseja executar ao recarregar a tela
    console.log('Tela recarregada');
  }, [navigation.isFocused()]);

  useFocusEffect(() => {
    // Neste caso, não é necessário fazer nada dentro do useFocusEffect
    // porque o useEffect já lidará com a lógica de recarregar a tela
  });
  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} />
      <TabRoute />
    </Container>
  );
}
