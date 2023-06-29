import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../src/utils/i18n';

import SvgMennaAzul from '../../../assets/img/treinadores/meninaAzul';
import SvgBoneRed from '../../../assets/img/treinadores/boneRed';

import But from '../../components/buttons/but';

export default function Pre() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <Styled.Container>
      <Styled.BoxSkip>
        <Styled.Touch onPress={() => navigation.navigate('Home')}>
          <Styled.SkipText>{t('Pular')}</Styled.SkipText>
          <Styled.Skip name="arrow-right" />
        </Styled.Touch>
      </Styled.BoxSkip>
      <Styled.BoxImg>
        <SvgMennaAzul />
        <SvgBoneRed />
      </Styled.BoxImg>
      <Styled.BoxTitle>
        <Styled.TextTitle>{t('Está Pronto para essa aventura?')}</Styled.TextTitle>
      </Styled.BoxTitle>
      <Styled.BoxText>
        <Styled.Desc>
          {t('Basta criar uma conta e começar a explorar o mundo dos Pokemons hoje!')}
        </Styled.Desc>
      </Styled.BoxText>
      <Styled.BoxButton>
        <But
          name={t('Criar conta')}
          color={'button'}
          onPress={() => navigation.navigate('Create')}
          backgroundColor="azul"
        />
      </Styled.BoxButton>
      <Styled.BoxLogin>
        <Styled.ButtonLogin onPress={() => navigation.navigate('Login')}>
          <Styled.TextLogin> {t('Ja tenho uma conta')}</Styled.TextLogin>
        </Styled.ButtonLogin>
      </Styled.BoxLogin>
    </Styled.Container>
  );
}
