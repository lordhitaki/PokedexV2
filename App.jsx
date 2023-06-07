import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Switch, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeContext, ThemeProvider, ThemeType } from './src/theme/theme';
import './src/utils/i18n';

import Home from './src/pages/home';
import themes from './src/theme';
import SplashScreen from './src/splashScreen';
import Routes from './src/routes/stackRoutes';

function App() {
  // const deviceTheme = useColorScheme();
  // const theme = themes[deviceTheme] || theme.dark;
  const { t, i18n } = useTranslation();

  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);
  }, []);

  return (
    <>
      {appReady ? (
        <ThemeProvider>
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
