import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
`;

export const ViewTitulo = styled.View`

   width: ${wp('100%')}px;
  height: ${hp('20%')}px;
  justify-content: center;
  padding-top: ${getStatusBarHeight() + 15}px;
  padding-left: 22px;

`;
export const TextoTitulo = styled.Text`

   color: ${({theme}) => theme.colors.white};
  font-family: 'Manrope';
  font-weight: bold;
  font-size: ${RFValue(22)}px;

`;
export const AreaLogin = styled(KeyboardAwareScrollView).attrs({
   contentContainerStyle: {
      alignItems: 'center'
   }
})`
  width: ${wp('100%')}px;
  height: ${hp('80%')}px;
  background-color: ${({theme}) => theme.colors.white};
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding-top: 25px;

`;
export const ViewCampo = styled.View`

   width: ${wp('80%')}px;
   height: ${hp('9%')}px;

`;
export const ViewButton = styled.View`

   width: ${wp('100%')}px;
   align-items: center;
   margin-top: ${hp('2%')}px;
   margin-bottom: ${hp('5%')}px;
   height: ${hp('9%')}px;

`;
export const TextoCampo = styled.Text`

   width: ${wp('85%')}px;
   color: ${({theme}) => theme.colors.cinza_titulo};
   font-size: ${RFValue(12)}px;

`;