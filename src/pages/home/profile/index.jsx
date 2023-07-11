import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ThemeContext, ThemeType } from '../../../../src/theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BotaoImg from '../../../components/buttons/BotaoImg';
import SvgMeninaAzul from '../../../../assets/img/imgs/meninaAzul';
import SvgRedCap from '../../../../assets/img/imgs/redCap';
import api from '../../../services/api';
import * as Styled from './style';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18n';

export default function Profile() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDarkMode = theme === ThemeType.dark;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [token, setToken] = useState();
  const [ID, setID] = useState();
  const [userData, setUserData] = useState(null);
  const { i18n } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { t } = useTranslation();
  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        AsyncStorage.setItem('Idioma', value);
      })
      .catch((err) => {
        console.log(err);
      });
    setModalVisible(false);
  };
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      await AsyncStorage.removeItem('ID');
      await AsyncStorage.removeItem('@favoritos');
      alert('usuario deslogado');
      navigation.navigate('Pre');
    } catch (error) {
      console.log('Erro ao limpar o AsyncStorage:', error);
    }
  };
  const checkTokenValidity = useCallback(async () => {
    try {
      const asyncToken = await AsyncStorage.getItem('Token');
      const asyncID = await AsyncStorage.getItem('ID');
      setToken(asyncToken);
      if (asyncToken) {
        try {
          const response = await api.get(`/users/${asyncID}`);
          const id = response.data._id;
          const { name, email, photo } = response.data;
          setUserData({ name, email, photo, id });
        } catch (error) {}
      }
    } catch (error) {
      console.log('Erro ao verificar o token:', error);
    }
  }, [setToken, setUserData]);
  useEffect(() => {
    checkTokenValidity();
  }, [checkTokenValidity, isFocused]);

  useEffect(() => {
    if (isFocused) {
      checkTokenValidity();
    }
  }, [isFocused, checkTokenValidity, token]);

  return (
    <Styled.Container>
      {!!token ? (
        <>
          <Styled.HeaderOn>
            <Styled.ProfilePic>
              {userData?.photo ? <Styled.ImageStyled source={{ uri: userData.photo }} /> : null}
            </Styled.ProfilePic>
            <Styled.Title> {userData?.name}</Styled.Title>
          </Styled.HeaderOn>
          <Styled.Scroll>
            <Styled.Title> {t('Informações da conta')}</Styled.Title>
            <Styled.BoxInfos>
              <Styled.Teste onPress={() => navigation.navigate('ChangeName', { id: userData?.id })}>
                <Styled.BoxIcone>
                  <Styled.BoxTermos>
                    <Styled.TextInformations> {t('Nome')}</Styled.TextInformations>
                    <Styled.TextDados>{userData?.name}</Styled.TextDados>
                  </Styled.BoxTermos>
                  <Styled.Icone name="angle-right" size={20} />
                </Styled.BoxIcone>
              </Styled.Teste>
              <Styled.Teste
                onPress={() => navigation.navigate('ChangeEmail', { id: userData?.id })}
              >
                <Styled.BoxIcone>
                  <Styled.BoxTermos>
                    <Styled.TextInformations> {t('Email')}</Styled.TextInformations>
                    <Styled.TextDados>{userData?.email}</Styled.TextDados>
                  </Styled.BoxTermos>
                  <Styled.Icone name="angle-right" size={20} />
                </Styled.BoxIcone>
              </Styled.Teste>
              <Styled.Teste>
                <Styled.BoxIcone>
                  <Styled.BoxTermos>
                    <Styled.TextInformations> {t('Senha')}</Styled.TextInformations>
                    <Styled.TextDados> *********</Styled.TextDados>
                  </Styled.BoxTermos>
                  <Styled.Icone name="angle-right" size={20} />
                </Styled.BoxIcone>
              </Styled.Teste>
            </Styled.BoxInfos>
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
            <Styled.BoxDados>
              <Styled.Title>{t('Geral')}</Styled.Title>
            </Styled.BoxDados>
            <Styled.BoxTermos>
              <Styled.Teste onPress={() => setModalVisible1(true)}>
                <Styled.TextInformations> {t('Termos e condições')}</Styled.TextInformations>
                <Styled.TextDados>{t('Tudo o que você precisa saber.')}</Styled.TextDados>
              </Styled.Teste>
              <Styled.Teste>
                <Styled.TextInformations> {t('Central de ajuda')}</Styled.TextInformations>
                <Styled.TextDados>{t('Precisa de ajuda? Fale conosco')}</Styled.TextDados>
              </Styled.Teste>
              <Styled.Teste onPress={() => setModalVisible2(true)}>
                <Styled.TextInformations> {t('Sobre')}</Styled.TextInformations>
                <Styled.TextDados> {t('Saiba mais sobre o app')}</Styled.TextDados>
              </Styled.Teste>
            </Styled.BoxTermos>
            <Styled.BoxTermos>
              <Styled.Title> {t('Outros')}</Styled.Title>
              <Styled.Teste onPress={() => clearAsyncStorage()}>
                <Styled.TextLogout>{t('Sair')}</Styled.TextLogout>
                <Styled.TextDados>
                  {t('Você entrou como')} {userData?.name}
                </Styled.TextDados>
              </Styled.Teste>
            </Styled.BoxTermos>
          </Styled.Scroll>
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
          <Styled.ContainerOff>
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
            <Styled.BoxDados>
              <Styled.Title>{t('Geral')}</Styled.Title>
            </Styled.BoxDados>
            <Styled.BoxTermos>
              <Styled.Teste onPress={() => setModalVisible1(true)}>
                <Styled.TextInformations> {t('Termos e condições')}</Styled.TextInformations>
                <Styled.TextDados>{t('Tudo o que você precisa saber.')}</Styled.TextDados>
              </Styled.Teste>
              <Styled.Teste>
                <Styled.TextInformations> {t('Central de ajuda')}</Styled.TextInformations>
                <Styled.TextDados>{t('Precisa de ajuda? Fale conosco')}</Styled.TextDados>
              </Styled.Teste>
              <Styled.Teste onPress={() => setModalVisible2(true)}>
                <Styled.TextInformations> {t('Sobre')}</Styled.TextInformations>
                <Styled.TextDados> {t('Saiba mais sobre o app')}</Styled.TextDados>
              </Styled.Teste>
            </Styled.BoxTermos>
            <Styled.BoxTermos>
              <Styled.Title> {t('Outros')}</Styled.Title>
              <Styled.Teste onPress={() => navigation.navigate('Login01')}>
                <Styled.TextLogout>{t('Entrar com sua conta')}</Styled.TextLogout>
              </Styled.Teste>
            </Styled.BoxTermos>
          </Styled.ContainerOff>
        </>
      )}
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
      <Styled.Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
        <Styled.ModalTermosBox>
          <Styled.BoxTerms>
            <Styled.TitleTermos>{t('Termos e condições')}</Styled.TitleTermos>
            <Styled.ScrollTerms>
              <Styled.TextTermos>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
                uncover many web sites still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose (injected humour and the
                like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
                Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </Styled.TextTermos>
            </Styled.ScrollTerms>
          </Styled.BoxTerms>
          <Styled.BtModal onPress={() => setModalVisible1(false)}>
            <Styled.TextDados> {t('Fechar')}</Styled.TextDados>
          </Styled.BtModal>
        </Styled.ModalTermosBox>
      </Styled.Modal>
      <Styled.Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
        <Styled.ModalAboutBox>
          <Styled.BoxAbout>
            <Styled.TitleTermos>{t('Sobre')}</Styled.TitleTermos>
            <Styled.ScrollAbout>
              <Styled.TextAbout>{t('App feito por Hitaki')}</Styled.TextAbout>
            </Styled.ScrollAbout>
          </Styled.BoxAbout>
          <Styled.BtModal onPress={() => setModalVisible2(false)}>
            <Styled.TextDados> {t('Fechar')}</Styled.TextDados>
          </Styled.BtModal>
        </Styled.ModalAboutBox>
      </Styled.Modal>
    </Styled.Container>
  );
}
