import React, { useContext } from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import SvgLoadSucess from '../../../../../assets/img/icons/loadSuccess';
import But from '../../../../components/buttons/but';
import * as Styled from './styles';

export default function RegisterSuccess() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <>
      <Styled.Container>
        <Styled.BoxImg>
          <SvgLoadSucess />
        </Styled.BoxImg>
        <Styled.BoxCenterImg>
          <Styled.Img
            source={require('../../../../../assets/img/treinadores/registerComplet.png')}
          />
        </Styled.BoxCenterImg>
        <Styled.BoxText>
          <Styled.Msg>{t('Sua Conta Foi Criada com Sucesso!')}</Styled.Msg>
          <Styled.SubMsg>
            {t('Seja bem-vindo, treinador! Estamos animados para acompnhar sua jornada.')}
          </Styled.SubMsg>
        </Styled.BoxText>
        <Styled.BoxButton>
          <But
            backgroundColor={'azul'}
            name={t('Continuar')}
            onPress={() => navigation.navigate('Login')}
            color={'button'}
          />
        </Styled.BoxButton>
      </Styled.Container>
    </>
  );
}
