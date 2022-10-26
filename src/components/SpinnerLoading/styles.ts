import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.branco_titulo};
  border-radius: 6px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
    font-size: ${RFValue(12)}px;
`;