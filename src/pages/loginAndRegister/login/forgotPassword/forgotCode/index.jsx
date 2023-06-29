import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../../utils/i18n';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Botao from '../../../../../components/buttons';
import ConfirmationCodeInput from '../../../../../components/inputs/inputCode';

export default function ForgotCode() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
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
          <Styled.Container>
            <Styled.BoxBack>
              <Styled.Touch onPress={() => navigation.goBack()}>
                <Styled.Icone name="angle-left" />
              </Styled.Touch>
            </Styled.BoxBack>
            <Styled.BoxTextHeader>
              <Styled.TextCreate>{t('Esqueci minha senha')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text01>{t('Insirao código')}</Styled.Text01>
              <Styled.Text02>
                {t('Digite o código de 6 digitos enviado para seu e-mail')}
              </Styled.Text02>
            </Styled.BoxText>
            <Styled.BoxInputs>
              <ConfirmationCodeInput numFields={6} onCodeFilled={handleCodeFilled} />
            </Styled.BoxInputs>
            <Styled.Email>
              <Styled.TextInput>{t('Não recebeu o código?')}</Styled.TextInput>
            </Styled.Email>
          </Styled.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxButtons>
        <Botao
          disabled={code?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </Styled.BoxButtons>
    </>
  );
}
