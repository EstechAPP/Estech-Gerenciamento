import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ImageProps, FlatList, FlatListProps, Platform, TextProps } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.ScrollView.attrs({
   contentContainerStyle:{
      alignItems: 'center'
   }
})`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_screens};
`;

export const AreaHeader = styled.View`
   margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 10 }px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: ${wp('85%')}px;
`;
export const AreaMensagemNome = styled.View`


`;
export const TextoMensagem = styled.Text`

   font-family: "Manrope";
   font-size: ${RFValue(14)}px;

`;
export const TextoNome = styled.Text<TextProps>`

   font-family: "Manrope";
   font-size: ${RFValue(22)}px;
   font-weight: bold;


`;

export const FotoUsuario = styled.Image<ImageProps>`
   width: 56px;
   height: 56px;
   border-radius: 3px;

`;

export const AreaInformacoes = styled.View`

   flex: 1;

`;
export const CardFaturamento = styled.View`

   width: 327px;
   height: 103px;
   margin-top: ${hp('5%')}px;
   background-color: ${({theme}) => theme.colors.background_bege};
   justify-content: space-around;
   border-radius: 4px;

`;
export const TextoFaturamento = styled.Text`

   text-align: center;
   font-size: ${RFValue(16)}px;
   font-family: ${({theme}) => theme.fonts.Primary_Font};
   
   
`;

export const ValorFaturamento = styled.Text`

   text-align: center;
   font-size: ${RFValue(22)}px;
   /* font-family: ${({theme}) => theme.fonts.Primary_Font}; */
   font-weight: 500;

`;
export const CardAvaliacao = styled.View`
   
   width: 327px;
   height: 103px;
   margin-top: ${hp('2%')}px;
   background-color: ${({theme}) => theme.colors.background_bege};
   justify-content: space-around;
   align-items: center;
   border-radius: 4px;
   flex-direction: row;

`;
export const TextoAvaliacao = styled.Text`

   text-align: left;
   font-size: ${RFValue(16)}px;
   font-family: ${({theme}) => theme.fonts.Primary_Font};

`;
export const ValorAvaliacao = styled.Text`

   text-align: left;
   font-size: ${RFValue(24)}px;
   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-weight: 500;

`;
export const MiniCard = styled.View`

   width: 116px;
   height: 101px;
   background-color: ${({theme}) => theme.colors.select_tab};
   border-radius: 4px;
   justify-content: space-around;
   align-items: center;

`;
export const TextoMiniCard = styled.Text`

   text-align: center;

`;
export const ValorMiniCard = styled.Text`

   text-align: center;
   font-size: ${RFValue(24)}px;
   font-weight: 500;
`;

export const AreaMiniCards = styled.View`

   flex-direction: row;
   justify-content: space-around;
   margin-top: ${hp('2%')}px;

`;

export const AreaProximoCliente = styled.View`

   width: 100%;
   align-items: center;
   margin-top: ${hp('1.5%')}px;

`;
export const TextoProximoCliente = styled.Text`

   margin-top: ${hp('3%')}px;
   font-size: ${RFValue(22)}px;
   font-weight: bold;

`;