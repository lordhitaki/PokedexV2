import React from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BoxButton, BoxCenterImg, BoxText, Container, Img, Msg, SubMsg } from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import But from '../../../../components/buttons/but';
import Auth from '../../../../authenticated/auth.js';

export default function LoadSuccess() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <BoxCenterImg>
          <Img source={require('../../../../../assets/img/treinadores/LoadSuccess.png')} />
        </BoxCenterImg>
        <BoxText>
          <Msg>{t('Bem-vindo de volta, Treinador!')}</Msg>
          <SubMsg>
            {t('Esperamos que tenha tido uma longa jornada desde a última vez em que nos visitou')}
          </SubMsg>
        </BoxText>
      </Container>
      <BoxButton>
        <But
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={() => navigation.navigate('Home')}
          color={'button'}
        />
      </BoxButton>
    </>
  );
}
