import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SvgLogin from '../../../../assets/img/treinadores/Login';
import Botao from '../../../components/buttons';
import BotaoImg from '../../../components/buttons/BotaoImg';
import SvgApple from '../../../../assets/img/icons/apple';
import SvgGoogle from '../../../../assets/img/icons/google';

import {
  BoxBack,
  BoxButtons,
  BoxDescrition,
  BoxImg,
  BoxTextCenter,
  BoxTextHeader,
  Container,
  Icone,
  TextCenter,
  TextCreate,
  TextDescrition,
  Touch,
} from './styles';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18n';
import But from '../../../components/buttons/but';

export default function Login() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <BoxBack>
        <Touch onPress={() => navigation.navigate('Pre')}>
          <Icone name="angle-left" />
        </Touch>
      </BoxBack>
      <BoxTextHeader>
        <TextCreate>{t('Entrar')}</TextCreate>
      </BoxTextHeader>
      <BoxImg>
        <SvgLogin />
      </BoxImg>
      <BoxTextCenter>
        <TextCenter>{t('Que bom te ver aqui novamente!')}</TextCenter>
      </BoxTextCenter>
      <BoxDescrition>
        <TextDescrition>{t('Como deseja se conectar?')}</TextDescrition>
      </BoxDescrition>
      <BoxButtons>
        <BotaoImg
          name={t('Continuar com a Apple')}
          image={<SvgApple />}
          borderColor={'black'}
          color={'main'}
        />
        <BotaoImg
          name={t('Continuar com o Google')}
          image={<SvgGoogle />}
          borderColor={'black'}
          color={'main'}
        />
        <But
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={() => navigation.navigate('Login01')}
          color={'button'}
        />
      </BoxButtons>
    </Container>
  );
}
