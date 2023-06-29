import React, { useState, useEffect, useCallback } from 'react';
import SvgDino from '../../../../assets/img/treinadores/dino';
import { useTranslation } from 'react-i18next';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import BotaoImg from '../../../components/buttons/BotaoImg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgMagikarp from '../../../../assets/img/imgs/magikarp';
import api from '../../../services/api';

import SvgCircleFav from '../../../../assets/img/icons/circleFav';
import SvgCircleFavOn from '../../../../assets/img/icons/circleFavOn';

import * as Styled from './style';

export default function Favorite() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const isFocused = useIsFocused();
  const [token, setToken] = useState();
  const [favoritos, setFavoritos] = useState([]);

  const checkTokenValidity = useCallback(async () => {
    try {
      const asyncToken = await AsyncStorage.getItem('Token');
      setToken(asyncToken);
      if (asyncToken) {
        try {
          const response = await api.get('/users/');
        } catch (error) {}
      } else {
      }
    } catch (error) {
      console.log('Erro ao verificar o token:', error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await checkTokenValidity();
      await getFavorite();
    };

    if (isFocused) {
      fetchData();
    }
  }, [isFocused, checkTokenValidity, getFavorite]);

  const getFavorite = async () => {
    try {
      const favoritosString = await AsyncStorage.getItem('@favoritos');
      if (favoritosString) {
        const favoritosArmazenados = JSON.parse(favoritosString);
        setFavoritos(favoritosArmazenados);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addFavorite = async (pokemon) => {
    try {
      const favoritosAtualizados = [...favoritos, pokemon];
      await AsyncStorage.setItem('@favoritos', JSON.stringify(favoritosAtualizados));
      setFavoritos(favoritosAtualizados);
    } catch (error) {
      console.log(error);
    }
  };
  const remFavorite = async (pokemon) => {
    try {
      const favoritosAtualizados = favoritos.filter((p) => p.name !== pokemon.name);
      await AsyncStorage.setItem('@favoritos', JSON.stringify(favoritosAtualizados));
      setFavoritos(favoritosAtualizados);
    } catch (error) {
      console.log(error);
    }
  };

  const addRemFavorite = async (pokemon) => {
    const favoritoExistente = favoritos.find((p) => p.name === pokemon.name);
    if (favoritoExistente) {
      remFavorite(pokemon);
    } else {
      addFavorite(pokemon);
    }
  };

  const renderPokemon = ({ item }) => {
    const isFavorito = favoritos.some((p) => p.num === item.num);

    return (
      <Styled.Touch key={item.num} onPress={() => navigation.navigate('Details', { id: item.num })}>
        <Styled.FullCard backgroundColor={item.card}>
          <Styled.BoxInfos>
            <Styled.Num>Nº{item.num}</Styled.Num>
            <Styled.Name>{item.name}</Styled.Name>
          </Styled.BoxInfos>
          <Styled.BoxTypes>
            {item.types.data?.map((type, index) => (
              <Styled.Types
                source={{ uri: `http://192.168.1.105:1337${type.attributes.url}` }}
                key={index}
              />
            ))}
          </Styled.BoxTypes>
          <Styled.Bg
            source={{
              uri: `http://192.168.1.105:1337${item.background.data.attributes.url}`,
            }}
          />
          <Styled.PokeImg
            source={{
              uri: `http://192.168.1.105:1337${item.images.data[0].attributes.url}`,
            }}
          />
          <Styled.BoxFavorite>
            {isFavorito ? (
              <Styled.BtFavorite onPress={() => addRemFavorite(item)}>
                <SvgCircleFavOn />
              </Styled.BtFavorite>
            ) : (
              <Styled.BtFavorite onPress={() => addRemFavorite(item)}>
                <SvgCircleFav />
              </Styled.BtFavorite>
            )}
          </Styled.BoxFavorite>
        </Styled.FullCard>
      </Styled.Touch>
    );
  };

  if (favoritos.length > 0) {
    return (
      <Styled.Container1>
        <Styled.Body>
          <Styled.Flat
            data={favoritos}
            keyExtractor={(item) => item.name}
            renderItem={renderPokemon}
            showsVerticalScrollIndicator={false}
          />
        </Styled.Body>
      </Styled.Container1>
    );
  } else {
    return (
      <>
        <Styled.Container>
          {!!token ? (
            <>
              <Styled.BoxImg>
                <SvgMagikarp />
              </Styled.BoxImg>
              <Styled.BoxText>
                <Styled.Info>{t('Você não favoritou nenhum pokemon :(')}</Styled.Info>
                <Styled.SubInfo>
                  {t('Clique no icone de coração dos seus pokemons favoritos e eles aparecerão')}
                </Styled.SubInfo>
              </Styled.BoxText>
            </>
          ) : (
            <>
              <Styled.BoxImg>
                <SvgDino />
              </Styled.BoxImg>
              <Styled.BoxText>
                <Styled.Info>{t('Você precisa entrar em uma conta para fazer isso.')}</Styled.Info>
                <Styled.SubInfo>
                  {t(
                    'Para acessar essa funcionalidade, é necessário fazer login ou criar uma conta. Faça isso agora!'
                  )}
                </Styled.SubInfo>
              </Styled.BoxText>
              <Styled.BoxButton>
                <BotaoImg
                  backgroundColor={'social'}
                  name={t('Entre ou Cadastre-se')}
                  onPress={() => navigation.navigate('Pre')}
                  color={'azul'}
                  borderColor={'azul'}
                />
              </Styled.BoxButton>
            </>
          )}
        </Styled.Container>
      </>
    );
  }
}
