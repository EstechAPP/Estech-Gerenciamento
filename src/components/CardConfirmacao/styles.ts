import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: 322px;
   height: 128px;
   background-color: ${({theme}) => theme.colors.background_bege};
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   border-radius: 10px;
   margin-top: ${({index} : {index : number}) => index == 0 ? 0 : 20 }px;
`;


export const AreaFotoCliente = styled.View`


`;

export const FotoCliente = styled.Image`

    width: 51px;
    height: 48px;
    border-radius: 48px;
    background-color: ${({theme}) => theme.colors.white};

`;
export const AreaInformacoes = styled.View`

    justify-content: space-between;
    height: 80%;
    /* width: 0%; */

`;
export const NomeCliente = styled.Text`

    font-size: ${RFValue(11)}px;
    font-weight: 700;

`;
export const HorarioAgendamento = styled.Text`

    font-size: ${RFValue(11)}px;

`;
export const DetalhesAgendamento = styled.Text`

    font-size: ${RFValue(11)}px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.select_tab};
    padding: 3px;
`;
export const TextStatus = styled.Text`

    font-size: ${RFValue(11)}px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.white};
    padding: 3px;

`;

export const TouchDetalhes = styled.TouchableOpacity`

    background-color: ${({theme}) => theme.colors.white};
    border-radius: 4px;
    width: 170px;
    align-items: center;

`;

export const TouchCancelar = styled.TouchableOpacity`

    background-color: ${({theme}) => theme.colors.vermelho_closed};
    border-radius: 4px;
    width: 87px;
    align-items: center;

`;

export const TouchConfirmar = styled.TouchableOpacity`

    background-color: ${({theme}) => theme.colors.verde_open};
    border-radius: 4px;
    width: 87px;
    align-items: center;

`;

export const AreaInfo = styled.View`

    width: 100%;
    flex-direction: row;

`;

export const AreaStatus = styled.View`

    width: 210px;
    height: 22px;
    flex-direction: row;
    justify-content: space-between;

`;
export const ValorHorario = styled.Text`

    font-size: ${RFValue(11)}px;
    font-weight: 700;

`;