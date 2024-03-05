import React, { useState, useEffect } from 'react';
// import pokeApi from '../../services/apiPoke';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


import * as Styled from './styles';
import SvgCircleFavOn from '../../../assets/img/icons/circleFavOn';
import SvgCircleFav from '../../../assets/img/icons/circleFav';

export default function CardList({ searchText, tipo, filtro }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();
  
  const [offset, setOffset] = useState(0);
  const [favoritos, setFavoritos] = useState([]);
  const [initialFilter, setInitialFilter] = useState('Menor');
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (isFocused) {
      // getPokemonData();
      getFavorite();
      getPokemon()
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

  // const getPokemonData = async () => {
  //   try {
  //     const response = await pokeApi.get(
  //       `/pokemons?populate=types,images,line_evolutions,background,weakness,type_text&pagination[pageSize]=100`
  //     );
  //     const responseData = response.data.data.map((item) => item);
  //     let filteredPokemonList = responseData.filter((pokemon) => {
  //       const nameMatch = pokemon.attributes.name.toLowerCase().includes(searchText?.toLowerCase());
  //       const typeMatch =
  //         tipo === '' ||
  //         (pokemon.attributes.types &&
  //           pokemon.attributes.types.data.some((type) => {
  //             const typeName = type.attributes.name.toLowerCase();
  //             const typeWithoutExtension = typeName.substring(0, typeName.lastIndexOf('.'));
  //             return typeWithoutExtension === tipo.toLowerCase();
  //           }));
  //       return nameMatch && typeMatch;
  //     });

  //     if (filtro === 'Menor' || initialFilter === 'Menor') {
  //       filteredPokemonList = filteredPokemonList?.sort(
  //         (a, b) => parseInt(a.attributes.num) - parseInt(b.attributes.num)
  //       );
  //     }
  //     if (filtro === 'Maior') {
  //       filteredPokemonList = filteredPokemonList?.sort(
  //         (b, a) => a.attributes.num - b.attributes.num
  //       );
  //     }
  //     if (filtro === 'A-Z') {
  //       filteredPokemonList = filteredPokemonList?.sort((a, b) =>
  //         a.attributes.name.localeCompare(b.attributes.name)
  //       );
  //     }
  //     if (filtro === 'Z-A') {
  //       filteredPokemonList = filteredPokemonList?.sort((b, a) =>
  //         a.attributes.name.localeCompare(b.attributes.name)
  //       );
  //     }

  //     setPokemonList(filteredPokemonList);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleLoadMore = () => {
    setOffset(offset + 1);
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
        infoSnapshot = await firestore()
          .collection('Pokemon')
          .orderBy('number')
          .get();
      }
  
      const infoData = infoSnapshot.docs.map(doc => ({
        ...doc.data(),
      }));
  
      let filteredPokemon = infoData;
      if (searchText) {
        filteredPokemon = infoData.filter(pokemon =>
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
              {item?.type.map((type, index) => (
                <Styled.Types
                  source={{ uri: type }}
                  key={index}
                />
              ))}
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
