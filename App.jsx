import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { ThemeContext, ThemeProvider, ThemeType } from './src/theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './src/utils/i18n';

import SplashScreen from './src/splashScreen';
import Routes from './src/routes/stackRoutes';

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [appReady, setAppReady] = useState(false);
  const [sb, setSb] = useState();

  useEffect(() => {
    const getTheme = async () => {
      try {
        let asyncTheme = await AsyncStorage.getItem('Theme');
        if (asyncTheme) {
          toggleTheme(asyncTheme);
          setSb(asyncTheme);
        }
      } catch (error) {
        console.log('Error retrieving theme from AsyncStorage:', error);
      }
    };
    setTimeout(() => {
      getTheme();
      setAppReady(true);
    }, 3000);
  }, [toggleTheme]);

  console.log(sb);
  let statusBarBackgroundColor, statusBarStyle;
  if (sb === ThemeType.light) {
    statusBarBackgroundColor = '#fff';
    statusBarStyle = 'dark-content';
  } else {
    statusBarBackgroundColor = '#121212';
    statusBarStyle = 'light-content';
  }

  return (
    <>
      {appReady ? (
        <ThemeProvider>
          <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarStyle} />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default App;
