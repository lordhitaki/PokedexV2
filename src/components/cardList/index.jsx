import React, { useState, useEffect, useLayoutEffect } from 'react';
import pokeApi from '../../services/apiPoke';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';

import * as Styled from './styles';
import SvgCircleFavOn from '../../../assets/img/icons/circleFavOn';
import SvgCircleFav from '../../../assets/img/icons/circleFav';

export default function CardList({ searchText, tipo, filtro }) {
  const [pokemonList, setPokemonList] = useState([]);
  const isFocused = useIsFocused();
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (isFocused) {
      getPokemonData();
      getFavorite();
    }
  }, [searchText, tipo, isFocused, filtro]);

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

  const getPokemonData = async () => {
    try {
      const response = await pokeApi.get(
        `/pokemons?populate=types,images,line_evolutions,background,weakness,type_text`
      );
      const responseData = response.data.data.map((item) => item.attributes);
      let filteredPokemonList = responseData.filter((pokemon) => {
        const nameMatch = pokemon.name.toLowerCase().includes(searchText?.toLowerCase());
        const typeMatch =
          tipo === '' ||
          (pokemon.types &&
            pokemon.types.data.some((type) => {
              const typeName = type.attributes.name.toLowerCase();
              const typeWithoutExtension = typeName.substring(0, typeName.lastIndexOf('.'));
              return typeWithoutExtension === tipo.toLowerCase();
            }));

        return nameMatch && typeMatch;
      });

      if (filtro === 'Maior') {
        filteredPokemonList = filteredPokemonList?.sort((b, a) => a.num - b.num);
      }
      if (filtro === 'A-Z') {
        filteredPokemonList = filteredPokemonList?.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (filtro === 'Z-A') {
        filteredPokemonList = filteredPokemonList?.sort((b, a) => a.name.localeCompare(b.name));
      }

      setPokemonList(filteredPokemonList);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPokemon = ({ item }) => {
    const isFavorito = favoritos.some((p) => p.name === item.name);
    return (
      <Styled.Container>
        <Styled.Touch onPress={() => navigation.navigate('Details', { id: item.num })}>
          <Styled.FullCard backgroundColor={item.card}>
            <Styled.BoxInfos>
              <Styled.Num>Nº{item?.num}</Styled.Num>
              <Styled.Name>{item?.name}</Styled.Name>
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
              source={{ uri: `http://192.168.1.105:1337${item.background.data.attributes.url}` }}
            />
            <Styled.PokeImg
              source={{ uri: `http://192.168.1.105:1337${item.images.data[0].attributes.url}` }}
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
      </Styled.Container>
    );
  };

  return (
    <Styled.Flat
      data={pokemonList}
      keyExtractor={(item) => item.name}
      renderItem={renderPokemon}
      showsVerticalScrollIndicator={false}
    />
  );
}
