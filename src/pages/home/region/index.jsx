import React from 'react';
import * as Styled from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export default function Region() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  // const {limit, offset} = route.params ?? {limit: 20, offset: 0};

  return (
    <Styled.Container>
      <Styled.Scroll>
        <Styled.Body>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 151,
            //     offset: 0,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/kanto.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Kanto</Styled.RegionName>
                  <Styled.GeneratioName>{t('1ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 100,
            //     offset: 151,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/johto.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Johto</Styled.RegionName>
                  <Styled.GeneratioName>{t('2ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/155.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 135,
            //     offset: 251,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/hoenn.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Hoenn</Styled.RegionName>
                  <Styled.GeneratioName>{t('3ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/258.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 107,
            //     offset: 386,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/sinnoh.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Sinnoh</Styled.RegionName>
                  <Styled.GeneratioName>{t('4ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/390.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 156,
            //     offset: 493,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/unova.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Unova</Styled.RegionName>
                  <Styled.GeneratioName>{t('5ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/495.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/498.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/501.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 72,
            //     offset: 649,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/kalos.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Kalos</Styled.RegionName>
                  <Styled.GeneratioName>{t('6ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/650.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/653.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/656.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 88,
            //     offset: 721,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/alola.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Alola</Styled.RegionName>
                  <Styled.GeneratioName>{t('7ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/722.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/725.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/728.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
          <Styled.BoxRegion>
            <Styled.Touch
            // onPress={() =>
            //   navigation.navigate('Pokedex', {
            //     limit: 96,
            //     offset: 809,
            //   })
            // }
            >
              <Styled.BackImg source={require('../../../../assets/img/backRegion/galar.png')} />
              <Styled.BoxInfos>
                <Styled.BoxText>
                  <Styled.RegionName>Galar</Styled.RegionName>
                  <Styled.GeneratioName>{t('8ª GERAÇÃO')}</Styled.GeneratioName>
                </Styled.BoxText>
                <Styled.BoxImg>
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/810.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/813.png',
                    }}
                  />
                  <Styled.PokeImg
                    source={{
                      uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/816.png',
                    }}
                  />
                </Styled.BoxImg>
              </Styled.BoxInfos>
            </Styled.Touch>
          </Styled.BoxRegion>
        </Styled.Body>
      </Styled.Scroll>
    </Styled.Container>
  );
}
