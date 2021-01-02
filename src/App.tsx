import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';

import themes from './styles/themes';

import Home from './components/Home';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
