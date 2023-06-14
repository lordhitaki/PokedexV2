import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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
import api from '../../../../services/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RegisterEmail() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUpSchema = yup.object({
    email: yup.string().email(t('Informe um E-mail válido')).required(t('Digite seu E-mail')),
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
  const onSubmit = async (data) => {
    if (user.length > 0) {
      navigation.navigate('RegisterPassword', { email: user });
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
              <TextCreate>{t('Criar conta')}</TextCreate>
            </BoxTextHeader>
            <BoxText>
              <Text02>{t('Vamos começar!')}</Text02>
              <Text01>{t('Qual é seu e-mail?')}</Text01>
            </BoxText>
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
              <TextInput>{t('Use um endereço de e-mail válido.')}</TextInput>
            </Email>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <BoxButtons>
        <Botao
          disabled={user?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </BoxButtons>
    </>
  );
}
