import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
 Container,
 Texto
} from './styles';

interface PrimaryButton extends TouchableOpacityProps{
  titulo: string;
  backgroundColor?: string;
  onPress: () => void;
}


export default function PrimaryButton({titulo, backgroundColor, ...rest}: PrimaryButton){
return (
   <Container backgroundColor={backgroundColor} {...rest}>
    <Texto>{titulo}</Texto>
   </Container>
  );
}