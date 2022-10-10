import styled from 'styled-components/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_bege};
   align-items: center;
   justify-content: center;

`;

export const Logo = styled.Text`
   font-size: 40px;
   font-family: 'Montserrat';
   font-weight: 300;
   text-align: center;
   
`;

