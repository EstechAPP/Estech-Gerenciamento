import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
   width: 147px;
   height: 73px;
   background-color: ${({theme}) => theme.colors.select_tab};
   align-items: center;
   justify-content: space-around;
   flex-direction: row;
   margin-top: ${({space}) => space ? 20 : 0}px;
   border-radius: 10px;
`;

export const TituloButton = styled.Text`
    font-size: 12px;
    text-align: center;
    width: 80px;
    text-justify: center
`;