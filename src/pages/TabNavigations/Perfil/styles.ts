import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_screens};
   padding-top: ${getStatusBarHeight()}px;
`;

export const AreaPerfil = styled.View`

   width: ${wp('100%')}px;
   height: ${hp('25%')}px;
   align-items: center;
   margin-top: ${hp('5%')}px;

`;
export const AreaFoto = styled.View`

   align-items: center;
   width: ${wp('100%')}px;
   height: ${hp('17%')}px;

`;
export const FotoUsuario = styled.Image`

   width: 132px;
   height: 132px;
   border-radius: 66px;

`;
export const TouchPerfil = styled.TouchableOpacity`

   width: 40px;
   height: 40px;
   border-radius: 20px;
   background-color: ${({theme}) => theme.colors.background_upload};
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: 3%;
   right: 35%;

`;
export const AreaNomeData = styled.View`

   align-items: center;

`;
export const AreaNome = styled.View`



`;
export const TextoNome = styled.Text`

   color: ${({theme}) => theme.colors.black};
   font-size: ${RFValue(18)}px;
   font-weight: bold;
   font-family: 'Manrope';

`;
export const AreaData = styled.View`

   flex-direction: row;


`;
export const TextoData = styled.Text`

   font-size: ${RFValue(12)}px;
   font-family: 'Manrope';
   color: ${({theme}) => theme.colors.cinza_titulo};

`;
export const ResultData = styled.Text`

   font-size: ${RFValue(12)}px;
   font-family: 'Manrope';
   font-weight: bold;
   color: ${({theme}) => theme.colors.cinza_titulo};

`;

export const AreaButtons = styled.View`

   width: 100%;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: flex-start;

`;