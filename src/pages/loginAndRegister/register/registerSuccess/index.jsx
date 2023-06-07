import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';

export default function RegisterSuccess() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
    </Container>
  );
}
