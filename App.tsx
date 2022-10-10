import { NavigationContainer } from '@react-navigation/native';
import moment from 'moment';
import 'moment/min/locales';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalContext from './src/context';
import RoutesNavigator from './src/Routes/RoutesNavigation';
import theme from './src/styles/theme';

export default function App(){

  moment.locale('pt-br');


return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <GlobalContext>
          <RoutesNavigator/>
        </GlobalContext>
      </NavigationContainer>
    </ThemeProvider>
  );
}