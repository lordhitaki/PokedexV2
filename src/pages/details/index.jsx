import React, { useState, useEffect, useLayoutEffect } from 'react';
import * as Styled from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import pokeApi from '../../services/apiPoke';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SvgFavoritosOn from '../../../assets/img/icons/favoritosOn';
import SvgFavoritos from '../../../assets/img/icons/favoritos';

export default function Details() {
  const { t, i18n } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  const [pokemonList, setPokemonList] = useState([]);
  const isFocused = useIsFocused();
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getPokemonData();
      getFavorite();
    }
  }, [isFocused]);

  const getPokemonData = async () => {
    try {
      const response = await pokeApi.get(
        `/pokemons/${route.params?.id}?populate=types,images,line_evolutions,weakness,header,ATK,DEF,HP,SPEED,card,typeEvos,background,type_text,num`,
        {
          params: {
            populate: ['line_evolutions.evosTypes', 'line_evolutions.card'],
          },
        }
      );
      // console.log(response.data.data.attributes.line_evolutions.data[0].attributes.evosTypes.data);
      setPokemonList(response.data.data.attributes);
    } catch (error) {
      console.error(error);
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

  const isFavorito = favoritos.some((p) => p.name === pokemonList.name);
  return (
    <Styled.Container>
      <Styled.Scroll>
        <Styled.BoxHeader>
          <Styled.ImgHeader
            source={{
              uri: `http://192.168.1.105:1337${pokemonList.header?.data[0].attributes.url}`,
            }}
          />
          <Styled.ImgPoke
            source={{
              uri: `http://192.168.1.105:1337${pokemonList.images?.data[0].attributes.url}`,
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
                <Styled.Touch onPress={() => addRemFavorite(pokemonList)}>
                  <SvgFavoritosOn />
                </Styled.Touch>
              ) : (
                <Styled.Touch onPress={() => addRemFavorite(pokemonList)}>
                  <SvgFavoritos />
                </Styled.Touch>
              )}
            </Styled.Touch>
          </Styled.BoxFavorite>
        </Styled.BoxHeader>
        <Styled.Body>
          <Styled.BoxDescr>
            <Styled.Name>{pokemonList?.name}</Styled.Name>
            <Styled.Num>Nº{pokemonList?.num}</Styled.Num>
          </Styled.BoxDescr>
          <Styled.BoxType>
            {pokemonList.types?.data.map((item, index) => (
              <Styled.ImgType
                source={{ uri: `http://192.168.1.105:1337${item.attributes.url}` }}
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
              <Styled.TextStats> {pokemonList?.ATK}</Styled.TextStats>
            </Styled.BoxInfoStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats>{pokemonList?.DEF}</Styled.TextStats>
            </Styled.BoxInfoStats>
          </Styled.BoxGeralStats>
          <Styled.BoxStats>
            <Styled.TextStats>HP</Styled.TextStats>
            <Styled.TextStats>Vel</Styled.TextStats>
          </Styled.BoxStats>
          <Styled.BoxGeralStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats> {pokemonList?.HP}</Styled.TextStats>
            </Styled.BoxInfoStats>
            <Styled.BoxInfoStats>
              <Styled.TextStats>{pokemonList?.SPEED}</Styled.TextStats>
            </Styled.BoxInfoStats>
          </Styled.BoxGeralStats>
          <Styled.TitleStats>{t('Fraquezas')}</Styled.TitleStats>
          <Styled.BoxWeak>
            {pokemonList?.weakness?.data.map((item, index) => (
              <Styled.ImgWeak
                source={{ uri: `http://192.168.1.105:1337${item.attributes.url}` }}
                key={index}
              />
            ))}
          </Styled.BoxWeak>
          <Styled.TitleStats>{t('Evoluções')}</Styled.TitleStats>
          <Styled.BoxEvo>
            {pokemonList.line_evolutions?.data.map((item, index) => (
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
          </Styled.BoxEvo>
        </Styled.Body>
      </Styled.Scroll>
    </Styled.Container>
  );
}
