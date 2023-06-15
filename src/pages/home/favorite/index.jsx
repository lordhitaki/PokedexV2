import React, { useState, useEffect, useCallback } from 'react';
import SvgDino from '../../../../assets/img/treinadores/dino';
import { useTranslation } from 'react-i18next';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BotaoImg from '../../../components/buttons/BotaoImg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgMagikarp from '../../../../assets/img/imgs/magikarp';
import api from '../../../services/api';
import * as Styled from './style';

export default function Favorite() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const isFocused = useIsFocused();
  const [token, setToken] = useState();

  const checkTokenValidity = useCallback(async () => {
    try {
      const asyncToken = await AsyncStorage.getItem('token');
      setToken(asyncToken);
      if (asyncToken) {
        try {
          const response = await api.get('/users/');
        } catch (error) {}
      } else {
      }
    } catch (error) {
      console.log('Erro ao verificar o token:', error);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      checkTokenValidity();
    }
  }, [isFocused, checkTokenValidity]);

  return (
    <>
      <Styled.Container>
        {!!token ? (
          <>
            <Styled.BoxImg>
              <SvgMagikarp />
            </Styled.BoxImg>
            <Styled.BoxText>
              <Styled.Info>{t('Você não favoritou nenhum pokemon :(')}</Styled.Info>
              <Styled.SubInfo>
                {t('Clique no icone de coração dos seus pokemons favoritos e eles aparecerão')}
              </Styled.SubInfo>
            </Styled.BoxText>
          </>
        ) : (
          <>
            <Styled.BoxImg>
              <SvgDino />
            </Styled.BoxImg>
            <Styled.BoxText>
              <Styled.Info>{t('Você precisa entrar em uma conta para fazer isso.')}</Styled.Info>
              <Styled.SubInfo>
                {t(
                  'Para acessar essa funcionalidade, é necessário fazer login ou criar uma conta. Faça isso agora!'
                )}
              </Styled.SubInfo>
            </Styled.BoxText>
            <Styled.BoxButton>
              <BotaoImg
                backgroundColor={'social'}
                name={t('Entre ou Cadastre-se')}
                onPress={() => navigation.navigate('Pre')}
                color={'azul'}
                borderColor={'azul'}
              />
            </Styled.BoxButton>
          </>
        )}
      </Styled.Container>
    </>
  );
}
