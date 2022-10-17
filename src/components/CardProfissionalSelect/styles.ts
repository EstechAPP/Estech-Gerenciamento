import styled from 'styled-components/native';
import { heightPercentageToDP as wp, widthPercentageToDP as hp } from 'react-native-responsive-screen';
import { ImageProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
   width: 300px;
   height: 60px;
   background-color: ${({theme, selected}) => selected ? theme.colors.select_tab : theme.colors.background_cards};
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 4px;
   padding-top: 6px;
   padding-bottom: 6px;
   padding-left: 16px;
   padding-right: 16px;
   margin-bottom: 16px;
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
    color: ${({theme, selected}) => selected ? theme.colors.white : theme.colors.cinza_titulo};

`;

