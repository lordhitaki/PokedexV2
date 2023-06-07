import React, { createContext, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';
import dark from './dark';
import light from './light';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  dark: dark,
  light: light,
};

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if (theme == ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
