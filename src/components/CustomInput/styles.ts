import styled from 'styled-components/native';
// import MaskInput, { MaskInputProps } from 'react-native-mask-input';
// import { CustomMaskInput } from '.';

export const Input = styled.TextInput`
   width: 306px;
   height: 47px;
   background-color: ${({theme}) => theme.colors.input_background};
   padding-left: 10px;
   border-radius: 4px;
   
`;

// export const MaskedInput = styled(MaskInput)<MaskInputProps>`
//    width: 306px;
//    height: 47px;
//    background-color: ${({theme}) => theme.colors.input_background};
//    padding-left: 10px;
//    border-radius: 4px;
// `;