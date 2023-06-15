import React, { useState, useContext } from 'react';
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import InputPass from '../../../../components/inputs/inputPass';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function RegisterPassword() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const route = useRoute();
  const { email } = route.params;

  const signUpSchema = yup.object({
    password: yup.string().required(t('Informe sua senha!')).min(8),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const user = watch('password');
  const onSubmit = async (data) => {
    try {
      if (user.length > 0) {
        navigation.navigate('RegisterUser', {
          email: route.params.email,
          password: user,
        });
      }
    } catch (error) {
      console.log(error);
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
              <Styled.TextCreate>{t('Criar conta')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text02>{t('Agora...')}</Styled.Text02>
              <Styled.Text01>{t('Crie uma senha')}</Styled.Text01>
            </Styled.BoxText>
            <Styled.BoxInputs>
              <InputPass
                control={control}
                name="password"
                placeholder={t('Senha')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
            </Styled.BoxInputs>
            <Styled.Email>
              <Styled.TextInput hasError={!!errors.password}>
                {t('Sua Senha deve ter pelo menos 8 caracteres')}
              </Styled.TextInput>
            </Styled.Email>
          </Styled.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxButtons>
        <Botao
          disabled={user?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </Styled.BoxButtons>
    </>
  );
}
