import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import auth, { firebase } from '@react-native-firebase/auth';


import * as Styled from './styles';
import { useTranslation } from 'react-i18next';
import '../../../../utils/i18n';
import Botao from '../../../../components/buttons';
import Input from '../../../../components/inputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function ChangeEmail() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const route = useRoute();
  const { id } = route.params;
  const user = firebase.auth().currentUser;


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
    defaultValues: {
      email: 'teste1@teste.com',
    },
  });
  const newUserEmail = watch('email');
  const onSubmit = async () => {
    try {
      // Verificar se o novo e-mail é válido
      if (!newUserEmail) {
        console.error('O novo e-mail é inválido.');
        return;
      }
      
      await user.updateEmail(newUserEmail);
      // E-mail atualizado com sucesso
      console.log('E-mail atualizado com sucesso para', newUserEmail);
    } catch (error) {
      // Houve um erro ao atualizar o e-mail
      console.error('Erro ao atualizar o e-mail:', error.message);
    }
  };
  // const onSubmit = async (data) => {
  //   if (user.length > 0) {
  //     const change = { email: user };
  //     const response = await api.put(`users/email/${id}`, change);
  //   }
  //   console.log('Sucesso');
  //   navigation.navigate('Home');
  // };
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
              <Styled.TextCreate>{t('Qual seu e-mail?')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text02>{t('Qual é o seu novo e-mail?')}</Styled.Text02>
              <Styled.Text01>{t('Digite abaixo')}</Styled.Text01>
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
                {t('Aqui você digitara seu novo e-mail para a troca')}
              </Styled.TextInput>
            </Styled.Email>
          </Styled.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxButtons>
        <Botao
          disabled={newUserEmail?.length > 0}
          backgroundColor={'azul'}
          name={t('Continuar')}
          onPress={handleSubmit(onSubmit)}
          color={'button'}
        />
      </Styled.BoxButtons>
    </>
  );
}
