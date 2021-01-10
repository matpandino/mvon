import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';

import themes from './styles/themes';
import RootRoutes from './routes/index.routes';

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
