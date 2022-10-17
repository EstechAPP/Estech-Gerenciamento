import { Platform, ScrollViewProps, TextProps } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
   keyboardShouldPersistTaps:'handled',
   contentContainerStyle:{
      alignItems: 'center',
      flex: 1
   },
   bounces: false,
   overScrollMode: 'never'
})<ScrollViewProps>`
   flex: 1;
`;

export const AreaHeader = styled.View`

   margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 70 : 40 }px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: ${wp('85%')}px;
   margin-bottom: ${hp('3%')}px;

`;
export const AreaMensagemNome = styled.View`



`;
export const TextoMensagem = styled.Text`

   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(14)}px;

`;
export const TextoNome = styled.Text<TextProps>`

   font-family: ${({theme}) => theme.fonts.Primary_Font};
   font-size: ${RFValue(22)}px;
   font-weight: bold;

`;

export const Formulario = styled.View`

    flex: 3;
    /* align-items: center; */

`;

export const AreaForm = styled.View`

    margin-top: ${hp('3%')}px;
    /* align-items: center; */


`;
export const AreaFormTouch = styled(AreaForm)`

    align-items: center;
    


`;
export const TextoLabel = styled.Text`


`;

export const TextoVinculo = styled.Text`

   margin-left: 20px;
   color: ${({theme}) => theme.colors.cinza_titulo}

`;

export const TouchVinculo = styled.TouchableOpacity`
   width: 90%;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 30px;
   border: ${({theme}) => theme.colors.select_tab} 2px dashed;
   padding: 5px;

`;
export const AreaButton = styled.View`

   flex: 1;
   /* height: 120px; */
   justify-content: space-around;
   margin-bottom: ${getStatusBarHeight()}px;

`;