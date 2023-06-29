import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Styled from './styles';
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
        const ID = response.data.data.user._id;
        console.log(ID);
        await AsyncStorage.setItem('ID', ID);
        await AsyncStorage.setItem('Token', token);
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
          <Styled.Container>
            <Styled.BoxBack>
              <Styled.Touch onPress={() => navigation.goBack()}>
                <Styled.Icone name="angle-left" />
              </Styled.Touch>
            </Styled.BoxBack>
            <Styled.BoxTextHeader>
              <Styled.TextCreate>{t('Entrar')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text02>{t('Bem Vindo de Volta!')}</Styled.Text02>
              <Styled.Text01>{t('Preencha os dados')}</Styled.Text01>
            </Styled.BoxText>
            <Styled.Email>
              <Styled.TextInput>{t('E-mail')}</Styled.TextInput>
            </Styled.Email>
            <Styled.BoxInputs>
              <Input
                control={control}
                name="email"
                placeholder={'E-mail'}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.email && <Styled.ErrorMsg>{errors.email.message}</Styled.ErrorMsg>}
            </Styled.BoxInputs>
            <Styled.Email>
              <Styled.TextInput>{t('Senha')}</Styled.TextInput>
            </Styled.Email>
            <Styled.BoxInputs>
              <InputPass
                control={control}
                name="password"
                placeholder={t('Senha')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.password && <Styled.ErrorMsg01>{errors.password.message}</Styled.ErrorMsg01>}
            </Styled.BoxInputs>
            <Styled.Forgot onPress={() => navigation.navigate('ForgotPass')}>
              <Styled.TextForgot> {t('Esqueceu sua senha?')}</Styled.TextForgot>
            </Styled.Forgot>
          </Styled.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxButtons>
        <Botao
          disabled={user?.length > 0 && pass?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar com um e-mail')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </Styled.BoxButtons>
    </>
  );
}
