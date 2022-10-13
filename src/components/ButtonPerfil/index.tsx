import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import {
 Container,
 TituloButton,

} from './styles';

interface ButtonPerfil extends TouchableOpacityProps{
    titulo: string;
    iconName: string;
    space: boolean;
    onPress: () => void;
  }

export function ButtonPerfil({titulo, iconName, space, onPress} : ButtonPerfil){
return (
   <Container onPress={onPress} space={space}  >
    <Icon name={iconName} size={24}/>
    <TituloButton numberOfLines={2}  >{titulo}</TituloButton>
   </Container>
  );
}