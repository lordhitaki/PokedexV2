import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  ErrorMsg,
} from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import Input from '../../../../components/inputs';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RegisterUser() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUpSchema = yup.object({
    username: yup
      .string()
      .required(t('Informe seu nome de usario'))
      .min(3, t('Seu nome de usuario precisa de pelo menos três caracteres')),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const user = watch('username');
  const onSubmit = async (data) => {
    try {
      if (user.length > 0) {
        const response = await axios.post('http://192.168.1.105:1337/api/auth/local', {
          identifier: data.email,
          password: data.password,
        });
        const token = response.data.jwt;
        setIsAuthenticated(true);
        if (isAuthenticated) {
          navigation.navigate('RegisterSuccess');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
          <Container>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            <BoxBack>
              <Touch onPress={() => navigation.navigate('Pre')}>
                <Icone name="angle-left" />
              </Touch>
            </BoxBack>
            <BoxTextHeader>
              <TextCreate>{t('Criar conta')}</TextCreate>
            </BoxTextHeader>
            <BoxText>
              <Text02>{t('Para Finalizar')}</Text02>
              <Text01>{t('Qual é seu nome?')}</Text01>
            </BoxText>
            <BoxInputs>
              <Input
                control={control}
                name="username"
                placeholder={t('Nome')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.username && <ErrorMsg>{errors.username.message}</ErrorMsg>}
            </BoxInputs>
            <Email>
              <TextInput>{t('Esse será seu nome de usuário no aplicativo')}</TextInput>
            </Email>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <BoxButtons>
        <Botao
          disabled={user?.length > 0}
          backgroundColor={'azul'}
          name={t('Criar conta')}
          onPress={handleSubmit(onSubmit)}
          color={'#fff'}
          s
        />
      </BoxButtons>
    </>
  );
}
