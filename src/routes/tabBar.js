import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import '../../src/utils/i18n';

import Pokedex from '../pages/home/pokedex';
import Profile from '../pages/home/profile';
import Favorite from '../pages/home/favorite';
import Region from '../pages/home/region';

import SvgPokedex from '../../assets/img/icons/pokedex';
import SvgPokedexOn from '../../assets/img/icons/pokedexOn';
import SvgRegiaoOn from '../../assets/img/icons/regiaoOn';
import SvgRegiao from '../../assets/img/icons/regiao';
import SvgFavoritosOn from '../../assets/img/icons/favoritosOn';
import SvgFavoritos from '../../assets/img/icons/favoritos';
import SvgPerilOn from '../../assets/img/icons/perfilOn';
import Svgperfil from '../../assets/img/icons/perfil';
import { ThemeContext, ThemeType } from '../theme/theme';

const Tab = createBottomTabNavigator();

export default function TabRoute() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: theme === ThemeType.dark ? '#fff' : '#121212',
        tabBarActiveBackgroundColor: theme === ThemeType.dark ? '#fff' : '#121212',
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <SvgPokedexOn />;
            }
            return <SvgPokedex />;
          },
        }}
      />
      <Tab.Screen
        name={t('Região')}
        component={Region}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <SvgRegiaoOn />;
            }
            return <SvgRegiao />;
          },
          headerStyle: {
            backgroundColor: theme === ThemeType.dark ? '#fff' : '#121212',
          },
          headerTintColor: theme === ThemeType.dark ? '#121212' : '#fff',
        }}
      />
      <Tab.Screen
        name={t('Favorito')}
        component={Favorite}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <SvgFavoritosOn />;
            }
            return <SvgFavoritos />;
          },
          headerStyle: {
            backgroundColor: theme === ThemeType.dark ? '#fff' : '#121212',
          },
          headerTintColor: theme === ThemeType.dark ? '#121212' : '#fff',
        }}
      />
      <Tab.Screen
        name={t('Perfil')}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <SvgPerilOn />;
            }
            return <Svgperfil />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
