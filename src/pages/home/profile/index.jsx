import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext, ThemeType } from '../../../../src/theme/theme';
import '../../../../src/utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BotaoImg from '../../../components/buttons/BotaoImg';
import SvgMeninaAzul from '../../../../assets/img/imgs/meninaAzul';
import SvgRedCap from '../../../../assets/img/imgs/redCap';
import api from '../../../services/api';
import * as Styled from './style';

export default function Profile() {
  const isDarkMode = theme === ThemeType.dark;
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [token, setToken] = useState();
  const [userData, setUserData] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        console.log('Linguagem alterada');
      })
      .catch((err) => {
        console.log(err);
      });
    setModalVisible(false);
  };
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      navigation.navigate('Pre');
      console.log('AsyncStorage limpo com sucesso!');
    } catch (error) {
      console.log('Erro ao limpar o AsyncStorage:', error);
    }
  };

  const checkTokenValidity = useCallback(async () => {
    try {
      const asyncToken = await AsyncStorage.getItem('token');
      setToken(asyncToken);
      if (asyncToken) {
        try {
          const response = await api.get('/users/');
          const { name, email } = response.data.data.users[0];
          setUserData({ name, email });
        } catch (error) {}
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

  console.log(userData?.name);
  return (
    <Styled.Container>
      {!!token ? (
        <>
          <Styled.HeaderOn>
            <Styled.ProfilePic></Styled.ProfilePic>
            <Styled.Title> {t('Teste')}</Styled.Title>
          </Styled.HeaderOn>
          <Styled.Title> {t('Informações da conta')}</Styled.Title>
          <Styled.BoxInfos>
            <Styled.TextInformations> {t('Nome')}</Styled.TextInformations>
            <Styled.TextDados>{userData?.name}</Styled.TextDados>
            <Styled.TextInformations> {t('Email')}</Styled.TextInformations>
            <Styled.TextDados>{userData?.email}</Styled.TextDados>
            <Styled.TextInformations> {t('Senha')}</Styled.TextInformations>
            <Styled.TextDados> {t('Teste')}</Styled.TextDados>
          </Styled.BoxInfos>
          <Styled.Container>
            <Styled.BoxDados>
              <Styled.BoxInfos>
                <Styled.Title> {t('Escolha seu Tema')}</Styled.Title>
                <Styled.TextDados> {t('Escolha se quer um tema escuro ou claro')}</Styled.TextDados>
              </Styled.BoxInfos>
              <Styled.TrocarTheme
                trackColor={{ false: '#767577', true: '#5D78C0' }}
                thumbColor={isDarkMode ? '#173EA5' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isDarkMode}
              />
            </Styled.BoxDados>
            <Styled.Title> {t('Idioma')}</Styled.Title>
            <Styled.Bti onPress={() => setModalVisible(true)}>
              <Styled.BoxDados>
                <Styled.Box>
                  <Styled.TextInformations> {t('Idioma da interface')}</Styled.TextInformations>
                  <Styled.TextDados> {i18n.language}</Styled.TextDados>
                </Styled.Box>
              </Styled.BoxDados>
            </Styled.Bti>
          </Styled.Container>
        </>
      ) : (
        <>
          <Styled.Header>
            <Styled.BoxHeader>
              <Styled.TextHeader>
                {t('Mantenha sua Pokédex atualizada e participe desse mundo.')}
              </Styled.TextHeader>
              <Styled.BoxImgHeader>
                <SvgMeninaAzul />
                <SvgRedCap />
              </Styled.BoxImgHeader>
            </Styled.BoxHeader>
            <Styled.BoxButton>
              <BotaoImg
                backgroundColor={'social'}
                name={t('Entre ou Cadastre-se')}
                onPress={() => navigation.navigate('Pre')}
                color={'azul'}
                borderColor={'azul'}
              />
            </Styled.BoxButton>
          </Styled.Header>
          <Styled.Container>
            <Styled.BoxDados>
              <Styled.BoxInfos>
                <Styled.TextInformations> {t('Escolha seu Tema')}</Styled.TextInformations>
                <Styled.TextDados> {t('Escolha se quer um tema escuro ou claro')}</Styled.TextDados>
              </Styled.BoxInfos>
              <Styled.TrocarTheme
                trackColor={{ false: '#767577', true: '#5D78C0' }}
                thumbColor={isDarkMode ? '#173EA5' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isDarkMode}
              />
            </Styled.BoxDados>
            <Styled.Title> {t('Idioma')}</Styled.Title>
            <Styled.Bti onPress={() => setModalVisible(true)}>
              <Styled.BoxDados>
                <Styled.Box>
                  <Styled.TextInformations> {t('Idioma da interface')}</Styled.TextInformations>
                  <Styled.TextDados> {i18n.language}</Styled.TextDados>
                </Styled.Box>
              </Styled.BoxDados>
            </Styled.Bti>
          </Styled.Container>
        </>
      )}
      <Styled.Container></Styled.Container>
      <Styled.Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Styled.BoxModal>
          <Styled.Box>
            <Styled.Bti onPress={() => changeLanguage('pt')}>
              <Styled.TextInformations> {t('Português')}</Styled.TextInformations>
            </Styled.Bti>
            <Styled.Bti onPress={() => changeLanguage('en')}>
              <Styled.TextDados> {t('Inglês')}</Styled.TextDados>
            </Styled.Bti>
          </Styled.Box>
        </Styled.BoxModal>
      </Styled.Modal>
      <Styled.Teste onPress={() => clearAsyncStorage()}></Styled.Teste>
    </Styled.Container>
  );
}
