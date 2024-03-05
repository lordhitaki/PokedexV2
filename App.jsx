import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from './src/theme/theme';
import Routes from './src/routes/stackRoutes';
import './src/utils/i18n';


function App() {
  const [appReady, setAppReady] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);
  }, []);

  // if (!appReady) {
  //   return <SplashScreen />;
  // }

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
