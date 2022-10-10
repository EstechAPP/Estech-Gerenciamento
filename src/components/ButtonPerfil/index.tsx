import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

import {
 Container,
 TituloButton,

} from './styles';

interface ButtonPerfil extends TouchableOpacityProps{
    titulo: string;
    iconName: string;
    onPress: () => void;
  }

export function ButtonPerfil({titulo, iconName, onPress} : ButtonPerfil){
return (
   <Container onPress={onPress} >
    <Icon name={iconName} size={24}/>
    <TituloButton>{titulo}</TituloButton>
   </Container>
  );
}