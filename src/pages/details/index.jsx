import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { useTranslation } from 'react-i18next';

import SvgFavoritosOn from '../../../assets/img/icons/favoritosOn';
import SvgFavoritos from '../../../assets/img/icons/favoritos';
import * as Styled from './style';

export default function Details() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const isFocused = useIsFocused();
  
  const route = useRoute();
  const id = route.params.id
  
  const [pokemon, setPokemon] = useState();
  const [favoritos, setFavoritos] = useState([]);
  
  
  useEffect(() => {
    if (isFocused) {
      getPokemon();
      getFavorite();
    }
  }, [isFocused]);


  const getPokemon = async () => {
    try {
      const infoSnapshot = await firestore()
        .collection('Pokemon')
        .where('number', '==', id)
        .get();
  
      if (!infoSnapshot.empty) {
        const pokemonData = infoSnapshot.docs[0].data();
        setPokemon(pokemonData);
      } else {
        console.log('Nenhum Pokémon encontrado com o ID:', id);
      }
    } catch (error) {
      console.error('Erro ao consultar o Firestore:', error);
    }
  };
  


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

  console.log(pokemon);
  const isFavorito = favoritos.some((p) => p?.name === pokemon?.name);
  return (
    <Styled.Container>
      <Styled.Scroll>
        <Styled.BoxHeader>
          <Styled.ImgHeader
            source={{
              uri: pokemon?.headerType,
            }}
          />
          <Styled.ImgPoke
            source={{
              uri: pokemon?.sprite,
            }}
          />
          <Styled.Back>
            <Styled.Touch onPress={navigation.goBack}>
              <Styled.Icone name="angle-left" />
            </Styled.Touch>
          </Styled.Back>
          <Styled.BoxFavorite>
            <Styled.Touch>
              {isFavorito ? (
                <Styled.Touch onPress={() => addRemFavorite(pokemon)}>
                  <SvgFavoritosOn />
                </Styled.Touch>
              ) : (
                <Styled.Touch onPress={() => addRemFavorite(pokemon)}>
                  <SvgFavoritos />
                </Styled.Touch>
              )}
            </Styled.Touch>
          </Styled.BoxFavorite>
        </Styled.BoxHeader>
        <Styled.Body>
          <Styled.BoxDescr>
            <Styled.Name>{pokemon?.name}</Styled.Name>
            <Styled.Num>Nº{pokemon?.number}</Styled.Num>
          </Styled.BoxDescr>
          <Styled.BoxType>
            {pokemon?.types?.map((item, index) => (
              <Styled.ImgType
                source={{ uri:item }}
                key={index}
              />
            ))}
          </Styled.BoxType>
          <Styled.BoxHis>
            <Styled.TextHis>
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer
            </Styled.TextHis>
          </Styled.BoxHis>
          <Styled.TitleStats>{t('Estatos Base')}</Styled.TitleStats>
          <Styled.BoxStats>
            <Styled.TextStats>Atk</Styled.TextStats>
            <Styled.TextStats>Def</Styled.TextStats>
          </Styled.BoxStats>
          <Styled.BoxGeralStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats> {pokemon?.ATK}</Styled.TextStats>
            </Styled.BoxInfoStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats>{pokemon?.DEF}</Styled.TextStats>
            </Styled.BoxInfoStats>
          </Styled.BoxGeralStats>
          <Styled.BoxStats>
            <Styled.TextStats>HP</Styled.TextStats>
            <Styled.TextStats>Vel</Styled.TextStats>
          </Styled.BoxStats>
          <Styled.BoxGeralStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats> {pokemon?.HP}</Styled.TextStats>
            </Styled.BoxInfoStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats>{pokemon?.SPEED}</Styled.TextStats>
            </Styled.BoxInfoStats>
          </Styled.BoxGeralStats>
          <Styled.TitleStats>{t('Fraquezas')}</Styled.TitleStats>
          <Styled.BoxWeak>
            {pokemon?.weakness?.map((item, index) => (
              <Styled.ImgWeak
                source={{ uri: item }}
                key={index}
              />
            ))}
          </Styled.BoxWeak>
          <Styled.TitleStats>{t('Evoluções')}</Styled.TitleStats>
          {/* <Styled.BoxEvo>
            {pokemon.line_evolutions?.data.map((item, index) => (
              <Styled.BoxPokeEvo key={index}>
                <Styled.BodyPokeEvo>
                  <Styled.Card>
                    <Styled.ImgCard
                      source={{
                        uri: `http://192.168.1.105:1337${item?.attributes.card.data[0].attributes.url}`,
                      }}
                    />
                    <Styled.ImgPokeEvo
                      source={{ uri: `http://192.168.1.105:1337${item.attributes.img}` }}
                      key={index}
                    />
                  </Styled.Card>
                  <Styled.BoxEvoInfos>
                    <Styled.NameEvo>{item?.attributes.Evolutions}</Styled.NameEvo>
                    <Styled.NumEvo>Nº{item?.attributes.num}</Styled.NumEvo>
                    <Styled.BoxEvoType>
                      {item.attributes.evosTypes?.data?.map((evolution, evolutionIndex) => (
                        <Styled.EvoType
                          source={{
                            uri: `http://192.168.1.105:1337${evolution.attributes.url}`,
                          }}
                          key={evolutionIndex}
                        />
                      ))}
                    </Styled.BoxEvoType>
                  </Styled.BoxEvoInfos>
                </Styled.BodyPokeEvo>
                {item.attributes.lvl && (
                  <Styled.LvlEvo>
                    <Styled.IconEvo name="arrow-down" />
                    <Styled.TextEvo>Evolui {item.attributes.lvl}</Styled.TextEvo>
                  </Styled.LvlEvo>
                )}
              </Styled.BoxPokeEvo>
            ))}
          </Styled.BoxEvo> */}
        </Styled.Body>
      </Styled.Scroll>
    </Styled.Container>
  );
}
