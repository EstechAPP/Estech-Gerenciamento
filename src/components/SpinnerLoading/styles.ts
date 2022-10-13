import styled from 'styled-components/native';

export const Container = styled.View`
   width: 200px;
   height: 50px;
   align-items: center;
   justify-content: center;

`;

export const TextoLoading = styled.Text`
    color: ${({theme}) => theme.colors.cinza_titulo}
`;