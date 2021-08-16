import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import {
  Container,
  TitleText
} from './styles';

import SplashScreen from 'react-native-splash-screen';

const App = () => {  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='#5636d3' />
      <Container>
        <TitleText>Rich Finances</TitleText>
      </Container>
    </ThemeProvider>
  );
};

export default App;
