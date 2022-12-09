import styled from 'styled-components/native';
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import { ImageProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`


    width: 360px;
    height: 60px;
    margin-bottom:  20px;
    flex-direction: row;
    justify-content: center;
`;


export const AreaProfissional = styled.View`
   width: 200px;
   height: 60px;
   background-color: ${({theme}) => theme.colors.background_cards};
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 4px;
   margin-left: ${({index}) => index == 0 ? 0 : 24 }px;
   padding-top: 6px;
   padding-bottom: 6px;
   padding-left: 16px;
   padding-right: 16px;
`;

export const AreaButtons  = styled.View`

    flex-direction: row;

`;

export const TouchButton  = styled.TouchableOpacity`

    height: 60px;
    width: 70px;
    background-color: ${({theme, backgroundColor}) => backgroundColor ? backgroundColor : theme.colors.vermelho_closed};
    align-items: center;
    justify-content: center;


`;


export const FotoProfissional = styled.Image<ImageProps>`

    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    margin-right: 5%;
    

`;
export const AreaNomeCargo = styled.View`

    width: 75%;

`;
export const NomeProfissional = styled.Text`

    font-family: 'Manrope';
    font-size: ${RFValue(10)}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_titulo};

`;
export const CargoProfissional = styled.Text`

    font-family: 'Manrope';
    font-size: ${RFValue(10)}px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.cinza_secundario};

`;