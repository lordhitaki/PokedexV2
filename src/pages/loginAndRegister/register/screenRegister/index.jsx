import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SvgElite4 from '../../../../../assets/img/treinadores/elite4';
import BotaoImg from '../../../../components/buttons/BotaoImg';
import SvgApple from '../../../../../assets/img/icons/apple';
import SvgGoogle from '../../../../../assets/img/icons/google';
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
import '../../../../utils/i18n';
import But from '../../../../components/buttons/but';

export default function Create() {
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
        <TextCreate>{t('Criar Conta')}</TextCreate>
      </BoxTextHeader>
      <BoxImg>
        <SvgElite4 />
      </BoxImg>
      <BoxTextCenter>
        <TextCenter>{t('Falta pouco para explorar esse mundo!')}</TextCenter>
      </BoxTextCenter>
      <BoxDescrition>
        <TextDescrition>{t('Como deseja se conectar?')}</TextDescrition>
      </BoxDescrition>
      <BoxButtons>
        <BotaoImg
          backgroundColor={'social'}
          name={t('Continuar com a Apple')}
          image={<SvgApple />}
          color={'main'}
        />
        <BotaoImg
          backgroundColor={'social'}
          name={t('Continuar com o Google')}
          image={<SvgGoogle />}
          color={'main'}
        />
        <But
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={() => navigation.navigate('RegisterEmail')}
          color={'button'}
        />
      </BoxButtons>
    </Container>
  );
}
