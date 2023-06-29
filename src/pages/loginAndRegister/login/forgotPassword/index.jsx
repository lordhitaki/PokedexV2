import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import Input from '../../../../components/inputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ForgotPass() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

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
      navigation.navigate('ForgotCode', { email: user });
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
              <Styled.Text02>{t('Vamos recuperar!')}</Styled.Text02>
              <Styled.Text01>{t('Qual é seu e-mail?')}</Styled.Text01>
            </Styled.BoxText>
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
              <Styled.TextInput>
                {t('Vamos enviar um código de verificação para o seu e-mail.')}
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
