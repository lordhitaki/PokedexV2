import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  BoxBack,
  Touch,
  BoxTextHeader,
  TextCreate,
  BoxButtons,
  Icone,
  BoxInputs,
  BoxText,
  Text02,
  Text01,
  TextInput,
  Email,
  TextForgot,
  Forgot,
  ErrorMsg,
  ErrorMsg01,
} from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import Input from '../../../../components/inputs';
import api from '../../../../services/api';
import InputPass from '../../../../components/inputs/inputPass';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Login01() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jwt, setJwt] = useState();

  const signUpSchema = yup.object({
    email: yup.string().email(t('Informe um E-mail válido')).required(t('Digite seu E-mail')),
    password: yup.string().required(t('Informe sua senha!')),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const user = watch('email');
  const pass = watch('password');
  const onSubmit = async (data) => {
    try {
      if (user.length > 0 && pass.length > 0) {
        const response = await api.post('/auth/login', {
          email: user,
          password: pass,
        });
        const token = response.data.data.token;
        await AsyncStorage.setItem('token', token); // Salvar o token no AsyncStorage
        navigation.navigate('LoadSuccess');
      }
    } catch (error) {
      if (error) {
        console.log(error);
        alert('Senha ou usuário inválido');
      }
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <Container>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            <BoxBack>
              <Touch onPress={() => navigation.goBack()}>
                <Icone name="angle-left" />
              </Touch>
            </BoxBack>
            <BoxTextHeader>
              <TextCreate>{t('Entrar')}</TextCreate>
            </BoxTextHeader>
            <BoxText>
              <Text02>{t('Bem Vindo de Volta!')}</Text02>
              <Text01>{t('Preencha os dados')}</Text01>
            </BoxText>
            <Email>
              <TextInput>{t('E-mail')}</TextInput>
            </Email>
            <BoxInputs>
              <Input
                control={control}
                name="email"
                placeholder={'E-mail'}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </BoxInputs>
            <Email>
              <TextInput>{t('Senha')}</TextInput>
            </Email>
            <BoxInputs>
              <InputPass
                control={control}
                name="password"
                placeholder={t('Senha')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.password && <ErrorMsg01>{errors.password.message}</ErrorMsg01>}
            </BoxInputs>
            <Forgot onPress={() => navigation.navigate('ForgotPass')}>
              <TextForgot> {t('Esqueceu sua senha?')}</TextForgot>
            </Forgot>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <BoxButtons>
        <Botao
          disabled={user?.length > 0 && pass?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </BoxButtons>
    </>
  );
}
