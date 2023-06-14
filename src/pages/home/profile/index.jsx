import React, { useState, useContext, useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import {
  Box,
  Container,
  BoxDados,
  Title,
  Bti,
  TextDados,
  TextInformations,
  Modal,
  BoxModal,
  TrocarTheme,
  BoxInfos,
  Teste,
  Header,
  TextHeader,
  BoxButton,
  BoxHeader,
  BoxImgHeader,
  HeaderOn,
  ProfilePic,
} from './style';
import { useTranslation } from 'react-i18next';
import { ThemeContext, ThemeType } from '../../../../src/theme/theme';
import '../../../../src/utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BotaoImg from '../../../components/buttons/BotaoImg';
import SvgMeninaAzul from '../../../../assets/img/imgs/meninaAzul';
import SvgRedCap from '../../../../assets/img/imgs/redCap';
import api from '../../../services/api';

export default function Profile() {
  const { toggleTheme, thema } = useContext(ThemeContext);
  const navigation = useNavigation();
  const isDarkMode = thema === ThemeType.dark;
  const isFocused = useIsFocused();
  const [token, setToken] = useState();

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
      await AsyncStorage.clear();
      navigation.navigate('Profile');
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

  return (
    <Container>
      {!!token ? (
        <>
          <HeaderOn>
            <ProfilePic></ProfilePic>
            <Title> {t('Teste')}</Title>
          </HeaderOn>
        </>
      ) : (
        <>
          <Header>
            <BoxHeader>
              <TextHeader> Mantenha sua Pokédex atualizada e participe desse mundo.</TextHeader>
              <BoxImgHeader>
                <SvgMeninaAzul />
                <SvgRedCap />
              </BoxImgHeader>
            </BoxHeader>
            <BoxButton>
              <BotaoImg
                backgroundColor={'social'}
                name={t('Entre ou Cadastre-se')}
                onPress={() => navigation.navigate('Login')}
                color={'azul'}
                borderColor={'azul'}
              />
            </BoxButton>
          </Header>
        </>
      )}
      <StatusBar backgroundColor={'#fff'} />
      <Container>
        <BoxDados>
          <BoxInfos>
            <TextInformations> {t('Escolha seu Tema')}</TextInformations>
            <TextDados> {t('Escolha se quer um tema escuro ou claro')}</TextDados>
          </BoxInfos>
          <TrocarTheme
            trackColor={{ false: '#767577', true: '#5D78C0' }}
            thumbColor={isDarkMode ? '#173EA5' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </BoxDados>
        <Title> {t('Idioma')}</Title>
        <Bti onPress={() => setModalVisible(true)}>
          <BoxDados>
            <Box>
              <TextInformations> {t('Idioma da interface')}</TextInformations>
              <TextDados> {i18n.language}</TextDados>
            </Box>
          </BoxDados>
        </Bti>
      </Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <BoxModal>
          <Box>
            <Bti onPress={() => changeLanguage('pt')}>
              <TextInformations> {t('Português')}</TextInformations>
            </Bti>
            <Bti onPress={() => changeLanguage('en')}>
              <TextDados> {t('Inglês')}</TextDados>
            </Bti>
          </Box>
        </BoxModal>
      </Modal>

      <Teste onPress={() => clearAsyncStorage()}></Teste>
    </Container>
  );
}
