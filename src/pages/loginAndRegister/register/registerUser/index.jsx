import React, { useEffect, useState } from 'react';
import {  TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as Styled from './styles';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import Input from '../../../../components/inputs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterUser() {
  const navigation = useNavigation();
  const { t} = useTranslation();
  const[id, setId ]= useState()

  useEffect(() => {
    getToken()
  }, []);
  const signUpSchema = yup.object({
    username: yup
      .string()
      .required(t('Informe seu nome de usario'))
      .min(3, t('Seu nome de usuario precisa de pelo menos três caracteres')),
  });
  const getToken = async () => {
    const asyncToken = await AsyncStorage.getItem('user');
    const cleanedToken = asyncToken.replace(/^"(.*)"$/, '$1');
    setId(cleanedToken);
  };
  

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const user = watch('username');

  const onSubmit = async () => {
    firestore()
  .collection('user')
  .add({
    username: user,
    uid: id
  })
  .then(() => {
    console.log('User added!');
    AsyncStorage.setItem('log', 'true');
    navigation.navigate("Home")
  });
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <Styled.Container>
            <Styled.BoxBack>
              <Styled.Touch onPress={() => navigation.goBack()}>
                <Styled.Icone name="angle-left" />
              </Styled.Touch>
            </Styled.BoxBack>
            <Styled.BoxTextHeader>
              <Styled.TextCreate>{t('Criar conta')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text02>{t('Para Finalizar')}</Styled.Text02>
              <Styled.Text01>{t('Qual é seu nome?')}</Styled.Text01>
            </Styled.BoxText>
            <Styled.BoxInputs>
              <Input
                control={control}
                name="username"
                placeholder={t('Nome')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.username && <Styled.ErrorMsg>{errors.username.message}</Styled.ErrorMsg>}
            </Styled.BoxInputs>
            <Styled.Email>
              <Styled.TextInput>
                {t('Esse será seu nome de usuário no aplicativo')}
              </Styled.TextInput>
            </Styled.Email>
          </Styled.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxButtons>
        <Botao
          disabled={user?.length > 0}
          backgroundColor={'azul'}
          name={t('Criar conta')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
          s
        />
      </Styled.BoxButtons>
    </>
  );
}
