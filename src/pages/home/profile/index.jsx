import React, { useState, useContext } from 'react';
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
} from './style';
import { useTranslation } from 'react-i18next';
import { ThemeContext, ThemeProvider, ThemeType } from '../../../../src/theme/theme';
import '../../../../src/utils/i18n';

export default function Profile() {
  const { toggleTheme, thema } = useContext(ThemeContext);

  const isDarkMode = thema === ThemeType.dark;

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

  return (
    <Container>
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
              <TextInformations> {t('Portugues')}</TextInformations>
            </Bti>
            <Bti onPress={() => changeLanguage('en')}>
              <TextDados> {t('Ingles')}</TextDados>
            </Bti>
          </Box>
        </BoxModal>
      </Modal>
    </Container>
  );
}
