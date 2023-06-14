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
import '../../../../../utils/i18n';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Botao from '../../../../../components/buttons';
import Input from '../../../../../components/inputs';
import ConfirmationCodeInput from '../../../../../components/inputs/inputCode';

export default function ForgotCode() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState();

  const signUpSchema = yup.object({
    email: yup.string().email(t('Informe um E-mail válido')).required(t('Digite seu E-mail')),
  });
  const handleCodeFilled = (code) => {
    setCode(code);
    // Faça o que precisar com o código completo...
  };
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
              <TextCreate>{t('Esqueci minha senha')}</TextCreate>
            </BoxTextHeader>
            <BoxText>
              <Text01>{t('Insirao código')}</Text01>
              <Text02>{t('Digite o código de 6 digitos enviado para seu e-mail')}</Text02>
            </BoxText>
            <BoxInputs>
              <ConfirmationCodeInput numFields={6} onCodeFilled={handleCodeFilled} />
            </BoxInputs>
            <Email>
              <TextInput>{t('Não recebeu o código?')}</TextInput>
            </Email>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <BoxButtons>
        <Botao
          disabled={code?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'#fff'}
        />
      </BoxButtons>
    </>
  );
}
