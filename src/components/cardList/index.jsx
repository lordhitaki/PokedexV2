import React, { useState, useEffect } from 'react';
// import pokeApi from '../../services/apiPoke';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import * as Styled from './styles';
import SvgCircleFavOn from '../../../assets/img/icons/circleFavOn';
import SvgCircleFav from '../../../assets/img/icons/circleFav';

export default function CardList({ searchText, tipo, filtro, limit }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();

  const [offset, setOffset] = useState(0);
  const [favoritos, setFavoritos] = useState([]);
  const [initialFilter, setInitialFilter] = useState('Menor');
  const [pokemon, setPokemon] = useState();
  console.log(limit);

  useEffect(() => {
    if (isFocused) {
      // getPokemonData();
      getFavorite();
      getPokemon();
    }
  }, [searchText, tipo, isFocused, filtro, initialFilter, offset]);

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

  const getPokemon = async () => {
    try {
      let infoSnapshot;
      if (tipo !== '') {
        infoSnapshot = await firestore()
          .collection('Pokemon')
          .orderBy('number')
          .where('textType', 'array-contains', tipo)
          .get();
      } else {
        infoSnapshot = await firestore().collection('Pokemon').orderBy('number').get();
      }

      const infoData = infoSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      let filteredPokemon = infoData;
      if (limit) {
        if (limit == 151) {
          filteredPokemon = infoData.filter((pokemon) => parseInt(pokemon.number) <= 151);
        } else if (limit == 152) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 152 && parseInt(pokemon.number) <= 251
          );
        } else if (limit == 252) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 252 && parseInt(pokemon.number) <= 386
          );
        } else if (limit == 387) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 387 && parseInt(pokemon.number) <= 493
          );
        } else if (limit == 494) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 494 && parseInt(pokemon.number) <= 649
          );
        } else if (limit == 650) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 650 && parseInt(pokemon.number) <= 721
          );
        } else if (limit == 722) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 722 && parseInt(pokemon.number) <= 809
          );
        } else if (limit == 810) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 810 && parseInt(pokemon.number) <= 905
          );
        } else if (limit == 906) {
          filteredPokemon = infoData.filter(
            (pokemon) => parseInt(pokemon.number) >= 906 && parseInt(pokemon.number) <= 1025
          );
        }
      }

      if (searchText) {
        filteredPokemon = infoData.filter((pokemon) =>
          // eslint-disable-next-line react/prop-types
          pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (filtro === 'Menor') {
        filteredPokemon.sort((a, b) => parseInt(a.number) - parseInt(b.number));
      } else if (filtro === 'Maior') {
        filteredPokemon.sort((a, b) => parseInt(b.number) - parseInt(a.number));
      } else if (filtro === 'A-Z') {
        filteredPokemon.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filtro === 'Z-A') {
        filteredPokemon.sort((a, b) => b.name.localeCompare(a.name));
      }

      setPokemon(filteredPokemon);
    } catch (error) {
      console.error('Erro ao consultar o Firestore:', error);
    }
  };

  const renderPokemon = ({ item }) => {
    const isFavorito = favoritos.some((p) => p.name === item.name);
    return (
      <Styled.Container>
        <Styled.Touch onPress={() => navigation.navigate('Details', { id: item.number })}>
          <Styled.FullCard backgroundColor={item.colorCard}>
            <Styled.BoxInfos>
              <Styled.Num>Nº{item?.number}</Styled.Num>
              <Styled.Name>{item?.name}</Styled.Name>
            </Styled.BoxInfos>

            <Styled.BoxTypes>
              {Array.isArray(item?.type) ? (
                item.type.map((type, index) => <Styled.Types source={{ uri: type }} key={index} />)
              ) : (
                <Styled.Types source={{ uri: item?.type }} />
              )}
            </Styled.BoxTypes>

            <Styled.Bg
              source={{
                uri: item?.backType,
              }}
            />
            <Styled.PokeImg
              source={{
                uri: item.sprite,
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
      </Styled.Container>
    );
  };

  return (
    <Styled.Flat
      data={pokemon}
      keyExtractor={(item) => item.name}
      renderItem={renderPokemon}
      showsVerticalScrollIndicator={false}
      // onEndReached={handleLoadMore}
      // onEndReachedThreshold={0.2}
    />
  );
}
