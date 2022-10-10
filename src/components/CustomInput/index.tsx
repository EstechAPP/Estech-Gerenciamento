import React from 'react';
import { TextInputProps } from 'react-native';
// import { MaskInputProps } from 'react-native-mask-input';

import {
 Input, MaskedInput
} from './styles';

export function CustomInput({...rest} : TextInputProps){
return (
   <Input {...rest} />
  );
}

// export function CustomMaskInput({...rest} : MaskInputProps){
//   return (
//      <MaskedInput {...rest} />
//     );
//   }
  