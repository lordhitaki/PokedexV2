import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../src/utils/i18n';
import * as Styled from './style';

export default function Pokedex() {
  const { t, i18n } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Texto>{t('Alou')} </Styled.Texto>
    </Styled.Container>
  );
}
