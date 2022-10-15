import React from 'react';
import { TextInputProps } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';

import {
 Input, MaskedInput
} from './styles';


interface CustomInput extends TextInputProps {
  backgroundColor: string
}

interface CustomMaskInput extends MaskInputProps {
  backgroundColor: string
}

export function CustomInput({...rest} : CustomInput){
return (
   <Input {...rest} />
  );
}

export function CustomMaskInput({...rest} : CustomMaskInput){
  return (
     <MaskedInput {...rest} />
    );
  }
  