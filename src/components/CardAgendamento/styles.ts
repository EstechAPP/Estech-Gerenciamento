import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   width: 322px;
   height: 128px;
   background-color: ${({theme, index}) => index == 0 ? theme.colors.select_tab : theme.colors.background_bege };
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   border-radius: 10px;
   margin-top: ${({index}) => index == 0 ? 0 : 10}px;
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
export const CancelarAgendamento = styled.Text`

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

export const TouchCancelarFinalizar = styled.TouchableOpacity`

    background-color: ${({theme, tipoAgenda}) =>  tipoAgenda ? theme.colors.verde_open : theme.colors.vermelho_closed};
    border-radius: 4px;
    width: 190px;
    align-items: center;

`;

export const AreaInfo = styled.View`

    width: 100%;
    flex-direction: row;

`;
export const ValorHorario = styled.Text`

    font-size: ${RFValue(11)}px;
    font-weight: 700;

`;