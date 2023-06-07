import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Texto } from './style';
import { useTranslation } from 'react-i18next';
import '../../../../src/utils/i18n';

export default function Pokedex() {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} />
      <Texto>{t('Alou')} </Texto>
    </Container>
  );
}
