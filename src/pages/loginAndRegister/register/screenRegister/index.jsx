import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import SvgElite4 from '../../../../../assets/img/treinadores/elite4';
import BotaoImg from '../../../../components/buttons/BotaoImg';
import SvgApple from '../../../../../assets/img/icons/apple';
import SvgGoogle from '../../../../../assets/img/icons/google';
import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import But from '../../../../components/buttons/but';

export default function Create() {
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
        <Styled.TextCreate>{t('Criar Conta')}</Styled.TextCreate>
      </Styled.BoxTextHeader>
      <Styled.BoxImg>
        <SvgElite4 />
      </Styled.BoxImg>
      <Styled.BoxTextCenter>
        <Styled.TextCenter>{t('Falta pouco para explorar esse mundo!')}</Styled.TextCenter>
      </Styled.BoxTextCenter>
      <Styled.BoxDescrition>
        <Styled.TextDescrition>{t('Como deseja se conectar?')}</Styled.TextDescrition>
      </Styled.BoxDescrition>
      <Styled.BoxButtons>
        <BotaoImg
          backgroundColor={'social'}
          name={t('Continuar com a Apple')}
          image={<SvgApple />}
          color={'button2'}
        />
        <BotaoImg
          backgroundColor={'social'}
          name={t('Continuar com o Google')}
          image={<SvgGoogle />}
          color={'button2'}
        />
        <But
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={() => navigation.navigate('RegisterEmail')}
          color={'button'}
        />
      </Styled.BoxButtons>
    </Styled.Container>
  );
}
