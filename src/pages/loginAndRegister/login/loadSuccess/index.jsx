import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import But from '../../../../components/buttons/but';

export default function LoadSuccess() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Styled.Container>
      <Styled.BoxCenterImg>
        <Styled.Img source={require('../../../../../assets/img/treinadores/LoadSuccess.png')} />
      </Styled.BoxCenterImg>
      <Styled.BoxText>
        <Styled.Msg>{t('Bem-vindo de volta, Treinador!')}</Styled.Msg>
        <Styled.SubMsg>
          {t('Esperamos que tenha tido uma longa jornada desde a última vez em que nos visitou')}
        </Styled.SubMsg>
      </Styled.BoxText>
      <Styled.BoxButton>
        <But
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={() => navigation.navigate('Home')}
          color={'button'}
        />
      </Styled.BoxButton>
    </Styled.Container>
  );
}
