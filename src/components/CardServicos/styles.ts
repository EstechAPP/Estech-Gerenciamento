import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
   width: 334px;
   height: 60px;
   background-color: ${({theme}) => theme.colors.background_cards};
   margin-bottom: 14px;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
   border-radius: 5px;
`;

export const ContainerView = styled.View`
   width: 334px;
   height: 60px;
   background-color: ${({theme}) => theme.colors.background_cards};
   margin-bottom: 14px;
   flex-direction: row;
   align-items: center;
   justify-content: space-evenly;
   border-radius: 5px;
`;

export const ImagemServico = styled.Image`

    width: 40px;
    height: 40px;
    border-radius: 20px;

`;
export const AreaNomePreco = styled.View`

    width: 80%;

`;
export const TextoNome = styled.Text`

    font-size: ${RFValue(10)}px;
    font-weight: bold;
    font-family: 'Manrope';
    color: ${({theme}) => theme.colors.cinza_titulo};

`;
export const AreaMediaPreco = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;
export const TextoDuracao = styled.Text`

    font-size: ${RFValue(9)}px;
    font-weight: bold;
    font-family: 'Manrope';
    color: ${({theme}) => theme.colors.cinza_titulo};


`;
export const TextoPreco = styled.Text`


    font-size: ${RFValue(12)}px;
    font-weight: bold;
    font-family: 'Manrope';

`;