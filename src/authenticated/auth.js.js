import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = ({ setIsAuthenticated }) => {
  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Realize a verificação da validade do token aqui
          // Exemplo: enviar uma requisição para o servidor para validar o token

          // Se o token for válido, você pode definir o estado 'isAuthenticated' como true
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log('Erro ao verificar o token:', error);
      }
    };

    checkTokenValidity();
  }, [setIsAuthenticated]);

  return null;
};

export default Auth;
