import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import * as Styled from './styles';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import InputPass from '../../../../components/inputs/inputPass';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterPassword() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const route = useRoute();

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

  const pass = watch('password');
 

  const onSubmit = async () => {
    auth()
  .createUserWithEmailAndPassword(route.params.email, pass)
  .then(() => {
    console.log('User account created & signed in!');
    AsyncStorage.setItem('log', 'false');
    navigation.navigate('RegisterUser')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

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
          disabled={pass?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </Styled.BoxButtons>
    </>
  );
}
