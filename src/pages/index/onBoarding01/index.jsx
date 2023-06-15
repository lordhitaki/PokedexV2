import React, { useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useTranslation } from 'react-i18next';
import '../../../../src/utils/i18n';
import * as Styled from './styles';

import SvgIndex from '../../../../assets/img/treinadores';
import SvgMeninaRosa from '../../../../assets/img/treinadores/meninaRosa';

export default function Index() {
  const { t, i18n } = useTranslation();

  const slides = [
    {
      key: '1',
      title: t('Todos os Pokemons em um só lugar'),
      text: t('Acesse uma vasta lista de Pokemon de todas as gerações ja feita pela Nintendo'),
      image: <SvgIndex />,
    },
    {
      key: '2',
      title: t('Mantenha sua Podedex Atualizada'),
      text: t(
        'Cadastre-se e mantenha seu perfil, pokemon favoritos,configurações e muito mais, salvos no aplicativo, mesmo sem conexão coma  internet'
      ),
      image: <SvgMeninaRosa />,
    },
  ];
  const [showHome, setShowHome] = useState(false);
  const navigation = useNavigation();

  function renderSlides({ item }) {
    return (
      <Styled.Container>
        <Styled.BoxLogo>{item.image}</Styled.BoxLogo>
        <Styled.BoxCenter>
          <Styled.TextCenter>{item.title}</Styled.TextCenter>
        </Styled.BoxCenter>
        <Styled.BoxText>
          <Styled.MiniText>{item.text}</Styled.MiniText>
        </Styled.BoxText>
      </Styled.Container>
    );
  }

  if (showHome) {
  }
  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#173EA5',
        width: 30,
        bottom: 110,
      }}
      dotStyle={{
        backgroundColor: '#D0D8ED',
        bottom: 110,
      }}
      renderNextButton={() => (
        <Styled.BoxNext>
          <Styled.TextButtonNext> {t('Continuar')}</Styled.TextButtonNext>
        </Styled.BoxNext>
      )}
      renderDoneButton={() => (
        <Styled.BoxNext>
          <Styled.TextButtonNext> {t('Vamos Começar!')}</Styled.TextButtonNext>
        </Styled.BoxNext>
      )}
      onDone={() => navigation.navigate('Pre')}
    />
  );
}
