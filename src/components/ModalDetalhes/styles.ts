import { Platform, TextProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
   flex: 1;
   align-items: center;
`;

export const AreaHeader = styled.View`

   margin-top: 30px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: ${wp('85%')}px;
   margin-bottom: ${hp('3%')}px;

`;

export const TextoNome = styled.Text<TextProps>`

   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(22)}px;
   font-weight: bold;

`;

export const AreaPreviewCliente = styled.View`
   align-items: center;
`;
export const ImagemPreview = styled.Image`
   width: 132px;
   height: 132px;
   border-radius: 66px;
   margin-bottom: 6px;

`;
export const NomeCliente = styled.Text`

   font-size: ${RFValue(16)}px;
   font-weight: bold;
   font-family: ${({theme}) => theme.fonts.Primary_Font};
   text-align: center;

`;

export const Label = styled.Text`

   font-size: ${RFValue(12)}px;
   font-family: ${({theme}) => theme.fonts.Primary_Font};
   text-align: center;

`;

export const AreaDetalhes = styled.View`

   width: ${wp('85%')}px;
   margin-top: 20px;

`;
export const TituloDetalhes = styled.Text`

   font-size: ${RFValue(18)}px;
   font-weight: 700;
   margin-bottom: 8px;

`;
export const AreaInfoDetalhes = styled.View`

   flex-direction: row;
   flex-wrap: wrap;
   margin-bottom: 5px;


`;
export const TextoTitulo = styled.Text`

   font-weight: bold;
   font-size: ${RFValue(12)}px;


`;
export const TextoResposta = styled.Text`

   font-size: ${RFValue(12)}px;


`;

export const AreaConfirmadoFinalizado = styled.View`

   flex-direction: row;
   justify-content: space-between;
   width: 80%;
   margin-top: 20px;


`;
export const DadoConfirmadoFinalizado = styled.View`
   align-items: center;

`;
export const TituloConfirmadoFinalizado = styled.Text`

   text-align: center;

`;
export const RespostaTituloConfirmadoFinalizado = styled.Text`
   text-align: center;


`;

export const TextoHoraAgendamento = styled.Text`
   text-align: center;
   font-size: ${RFValue(16)}px;
   font-weight: bold;
   color: ${({theme}) => theme.colors.select_tab};
   margin-bottom: 10px;

`;

export const TituloHoraAgendamento = styled.Text`
   text-align: center;
   font-size: ${RFValue(16)}px;
   margin-top: 14px;
`;