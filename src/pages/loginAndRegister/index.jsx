import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BoxButton,
  BoxImg,
  BoxLogin,
  BoxSkip,
  BoxText,
  BoxTitle,
  ButtonLogin,
  Container,
  Desc,
  Skip,
  SkipText,
  TextLogin,
  TextTitle,
  Touch,
} from './styles';
import { useTranslation } from 'react-i18next';
import '../../../src/utils/i18n';

import SvgMennaAzul from '../../../assets/img/treinadores/meninaAzul';
import SvgBoneRed from '../../../assets/img/treinadores/boneRed';

import Botao from '../../components/buttons';
import But from '../../components/buttons/but';

export default function Pre() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <BoxSkip>
        <Touch onPress={() => navigation.navigate('Pokedex')}>
          <SkipText>{t('Pular')}</SkipText>
          <Skip name="arrow-right" />
        </Touch>
      </BoxSkip>
      <BoxImg>
        <SvgMennaAzul />
        <SvgBoneRed />
      </BoxImg>
      <BoxTitle>
        <TextTitle>{t('Está Pronto para essa aventura?')}</TextTitle>
      </BoxTitle>
      <BoxText>
        <Desc>{t('Basta criar uma conta e começar a explorar o mundo dos Pokemons hoje!')}</Desc>
      </BoxText>
      <BoxButton>
        <But
          name={t('Criar conta')}
          color={'#fff'}
          onPress={() => navigation.navigate('Create')}
          backgroundColor="azul"
        />
      </BoxButton>
      <BoxLogin>
        <ButtonLogin onPress={() => navigation.navigate('Login')}>
          <TextLogin> {t('Ja tenho uma conta')}</TextLogin>
        </ButtonLogin>
      </BoxLogin>
    </Container>
  );
}
