import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/theme';
import './src/utils/i18n';

import SplashScreen from './src/splashScreen';
import Routes from './src/routes/stackRoutes';

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);
  }, []);

  if (!appReady) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider>
      <StatusBar />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
