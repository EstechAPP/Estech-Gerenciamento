import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';


import {
 Container, Texto
} from './styles';

export function SpinnerLoading({titulo} : {titulo: string}){
return (
   <Container> 
    <ActivityIndicator color={theme.colors.select_tab}/> 
    <Texto>{titulo}</Texto>
   </Container>
  );
}