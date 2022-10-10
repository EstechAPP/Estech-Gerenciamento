import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
    activeOpacity: 0.6
})`
   width: 275px;
   height: 53px;
   background-color: ${({theme}) => theme.colors.primary_color_button};
   justify-content: center;
   align-items: center;
   border-radius: 27px;
`;

export const Texto = styled.Text`

    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(16)}px;
    font-weight: bold;
   
`;