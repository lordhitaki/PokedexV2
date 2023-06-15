import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SvgLogin from '../../../../assets/img/treinadores/Login';
import BotaoImg from '../../../components/buttons/BotaoImg';
import SvgApple from '../../../../assets/img/icons/apple';
import SvgGoogle from '../../../../assets/img/icons/google';

import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18n';
import But from '../../../components/buttons/but';

export default function Login() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Styled.Container>
      <Styled.BoxBack>
        <Styled.Touch onPress={() => navigation.navigate('Pre')}>
          <Styled.Icone name="angle-left" />
        </Styled.Touch>
      </Styled.BoxBack>
      <Styled.BoxTextHeader>
        <Styled.TextCreate>{t('Entrar')}</Styled.TextCreate>
      </Styled.BoxTextHeader>
      <Styled.BoxImg>
        <SvgLogin />
      </Styled.BoxImg>
      <Styled.BoxTextCenter>
        <Styled.TextCenter>{t('Que bom te ver aqui novamente!')}</Styled.TextCenter>
      </Styled.BoxTextCenter>
      <Styled.BoxDescrition>
        <Styled.TextDescrition>{t('Como deseja se conectar?')}</Styled.TextDescrition>
      </Styled.BoxDescrition>
      <Styled.BoxButtons>
        <BotaoImg
          name={t('Continuar com a Apple')}
          image={<SvgApple />}
          borderColor={'black'}
          color={'button2'}
          backgroundColor={'social'}
        />
        <BotaoImg
          name={t('Continuar com o Google')}
          image={<SvgGoogle />}
          borderColor={'black'}
          color={'button2'}
          backgroundColor={'social'}
        />
        <But
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={() => navigation.navigate('Login01')}
          color={'button'}
        />
      </Styled.BoxButtons>
    </Styled.Container>
  );
}
