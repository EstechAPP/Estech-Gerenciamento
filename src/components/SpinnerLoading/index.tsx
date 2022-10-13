import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
 Container, TextoLoading
} from './styles';

export function SpinnerLoading({titulo} : {titulo: string}){
return (
   <Container>
        <ActivityIndicator/>
        <TextoLoading>{titulo}</TextoLoading>
   </Container>
  );
}