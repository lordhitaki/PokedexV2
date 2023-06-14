import React from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BoxButton, BoxCenterImg, BoxImg, BoxText, Container, Img, Msg, SubMsg } from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import SvgLoadSucess from '../../../../../assets/img/icons/loadSuccess';
import But from '../../../../components/buttons/but';

export default function RegisterSuccess() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Container>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <BoxImg>
          <SvgLoadSucess />
        </BoxImg>
        <BoxCenterImg>
          <Img source={require('../../../../../assets/img/treinadores/registerComplet.png')} />
        </BoxCenterImg>
        <BoxText>
          <Msg>{t('Sua Conta Foi Criada com Sucesso!')}</Msg>
          <SubMsg>
            {t('Seja bem-vindo, treinador! Estamos animados para acompnhar sua jornada.')}
          </SubMsg>
        </BoxText>
      </Container>
      <BoxButton>
        <But
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={() => navigation.navigate('Login')}
          color={'button'}
        />
      </BoxButton>
    </>
  );
}
