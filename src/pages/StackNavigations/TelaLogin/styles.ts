import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


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
export const AreaLogin = styled.View`

  width: ${wp('100%')}px;
  height: ${hp('80%')}px;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding-top: 43px;


`;
export const TextoLabel = styled.Text`
  width: ${wp('85%')}px;
  text-align: center;
  color: ${({theme}) => theme.colors.cinza_titulo};
  font-size: ${RFValue(12)}px;

`;
export const AreaEsqueceuSenha = styled.View`

  width: ${wp('79%')}px;
  padding-top: 10px;
  padding-bottom: 24px;

`;
export const TouchSenha = styled.TouchableOpacity`


`;
export const TextoSenha = styled.Text`

  color: ${({theme}) => theme.colors.primary_color_button};
  text-align: right;

`;

export const AreaLoginSocial = styled.View`

  align-items: center;

`;
export const Divisoria = styled.View`

  margin-top: 24px;
  flex-direction: row;
  align-items: center; 

`;

export const Divisa = styled.View`

  width: ${wp('28%')}px;
  border-width: 1px;
  height: 0px;
  border-color: #E8ECF4;

`;
export const TextoDivisa = styled.Text`

  margin-left: 12px;
  margin-right: 12px;
  color: ${({theme}) => theme.colors.cinza_titulo};
  font-family: 'Manrope';

`;
export const AreaBotoesSociais = styled.View`

  flex-direction: row;
  margin-top: ${hp('4%')}px;
  justify-content: space-evenly;
  width: ${wp('92%')}px;

`;
export const ContainerBotao = styled.TouchableOpacity`

  border-width: 1px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 39px;
  padding-left: 39px;
  border-radius: 6px;
  border-color: #E8ECF4;

`;

export const AreaRegistrar = styled.View`

  width: ${wp('100%')}px;
  flex-direction: row;
  justify-content: center;
  height: ${hp('16%')}px;
  align-items: flex-end;

`;
export const TextoRegistrar = styled.Text`

color: ${({theme}) => theme.colors.cinza_titulo};


`;
export const TextoRegistro = styled.Text`

  color: ${({theme}) => theme.colors.primary_color_button};

`;
export const TouchRegistro = styled.TouchableOpacity`



`;