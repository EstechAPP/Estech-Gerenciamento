import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
 Container,
 Texto
} from './styles';

interface PrimaryButton extends TouchableOpacityProps{
  titulo: string;
  onPress: () => void;
}


export default function PrimaryButton({titulo, ...rest}: PrimaryButton){
return (
   <Container {...rest}>
    <Texto>{titulo}</Texto>
   </Container>
  );
}