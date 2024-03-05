import React from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Input from '../../../../components/inputs';
import Botao from '../../../../components/buttons';
import '../../../../utils/i18n';
import * as Styled from './styles';

export default function ChangeName() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const route = useRoute();
  const { id } = route.params;

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

  // const onSubmit = async (data) => {
  //   if (user.length > 0) {
  //     const change = { name: user };
  //     const response = await api.put(`users/name/${id}`, change);
  //   }
  //   console.log('Sucesso');
  //   navigation.navigate('Home');
  // };

  const infoUpdt = {
    username: user
  } 
  
  
  const onSubmit = async () => {
    if (user.length > 3) {
      try {
        const infosCollection = firestore().collection('user'); 
        const querySnapshot = await infosCollection
          .where('uid', '==', id)
          .get();
  
        if (!querySnapshot.empty) {
          const docRef = querySnapshot.docs[0].ref;
          await docRef.update(infoUpdt);
          navigation.navigate('Home')
        }
      } catch (error) {
        console.error('Erro ao atualizar informações do usuário:', error);
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
              <Styled.TextCreate>{t('Trocar nome')}</Styled.TextCreate>
            </Styled.BoxTextHeader>
            <Styled.BoxText>
              <Styled.Text01>{t('Qual sera o novo nome de usuário?')}</Styled.Text01>
            </Styled.BoxText>
            <Styled.BoxInputs>
              <Input
                control={control}
                name="username"
                placeholder={t('Nome')}
                placeholderTextColor={'#999999'}
                errors={errors}
              />
              {errors.username && <Styled.ErrorMsg>{errors.username.message}</Styled.ErrorMsg>}
            </Styled.BoxInputs>
            <Styled.Email>
              <Styled.TextInput>
                {t('Esse será seu nome de usuário no aplicativo')}
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
          s
        />
      </Styled.BoxButtons>
    </>
  );
}
