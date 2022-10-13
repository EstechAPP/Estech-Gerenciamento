import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_screens};
   padding-top: ${getStatusBarHeight()}px;
`;


export const Header = styled.View`

   width: ${wp('100%')}px;
   height: ${hp('33%')}px;
   align-items: center;
   margin-top: ${hp('5%')}px;

`;
export const AreaLogoCapa = styled.View`

    flex-direction: row;
    justify-content: space-around;
    width: 85%;

`;
export const AreaFoto = styled.View`

    align-items: center;

`;
export const TituloImagem = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.Primary_Font};
    margin-bottom: 5px;
    color: ${({theme}) => theme.colors.cinza_titulo};


`;
export const ImagemPreview = styled.Image`
   width: 132px;
   height: 132px;
   border-radius: 66px;

`;
export const TouchUpload = styled.TouchableOpacity`

   width: 40px;
   height: 40px;
   border-radius: 20px;
   background-color: ${({theme}) => theme.colors.background_upload};
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: -6%;
   right: 10%;

`;

export const InfoEmpresa = styled.View`

    width: 85%;
    align-items: center;
    margin-top: ${hp('3%')}px;

`;
export const TituloEmpresa = styled.Text`

    font-family: ${({theme}) => theme.fonts.Primary_Font};
    color: ${({theme}) => theme.colors.cinza_titulo};
    font-weight: bold;
    font-size: ${RFValue(18)}px;

`;
export const AreaDataCadastro = styled.View`

    flex-direction: row;

`;
export const DataCadastro = styled.Text`

    font-family: ${({theme}) => theme.fonts.Primary_Font};
    color: ${({theme}) => theme.colors.cinza_titulo};

`;
export const ResultCadastro = styled.Text`

    font-family: ${({theme}) => theme.fonts.Primary_Font};
    color: ${({theme}) => theme.colors.cinza_titulo};
    font-weight: bold;

`;

export const AreaButtons = styled.View`

   width: 100%;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: flex-start;

`;