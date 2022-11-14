import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Alert } from 'react-native';
import { postConfirmaRecusaAgendamento } from '../../services/agenda';
import { IAgendamento } from '../../types/agenda';
import { IAgendaServicoUsuario } from '../../types/AgendaServicoUsuario';

import {
 Container,
 AreaFotoCliente,
 FotoCliente,
 AreaInformacoes,
 NomeCliente,
 HorarioAgendamento,
 DetalhesAgendamento,
 AreaInfo,
 ValorHorario,
 TouchDetalhes,
 TouchCancelar,
 AreaStatus,
 TouchConfirmar,
 TextStatus,
} from './styles';

export function CardConfirmacao({item, index, attlista} : {item: IAgendaServicoUsuario, index: number, attlista: () => void}){

    const navigation = useNavigation();

function DialogConfirmacao(statusAgendamento : boolean){

    Alert.alert(`${statusAgendamento ? "Confirmação Agendamento" : "Recusa do agendamento"}`,`Deseja realizar a ${statusAgendamento ? "confirmação" : "recusa"} do agendamento?`, [
        {
            text: 'Sim',
            style: 'default',
            onPress: () => ConfirmaRecusaAgendamento(statusAgendamento)
        },
        {
            text: 'Não',
            style: 'cancel'
        }
    ] )
}

function ConfirmaRecusaAgendamento(statusAgendamento: boolean){
    postConfirmaRecusaAgendamento(item.id, statusAgendamento)
    .then(response => {
        attlista()
        Alert.alert(`${statusAgendamento ? "Confirmação Agendamento" : "Recusa do agendamento"}`, `Agendamento ${statusAgendamento ? "confirmado" : "recusado"} com sucesso!`)    
    })
    .catch(error => {
        Alert.alert('Tivemos um problema em processar a requisição', error.response.data.mensagem)
    })
}

return (
   <Container index={index} >
        <AreaFotoCliente>
            <FotoCliente source={item.usuarioCliente.foto_base64 ? {uri: item.usuarioCliente.foto_base64} : require('../../../assets/no-profile-icon.png')}/>
        </AreaFotoCliente>
        <AreaInformacoes>
            <AreaInfo>
                <NomeCliente>{item.usuarioCliente.nome} {item.usuarioCliente.sobrenome}</NomeCliente>
            </AreaInfo>
            <AreaInfo>
                <HorarioAgendamento>Data: </HorarioAgendamento>
                <ValorHorario>{moment(item.dataAgendamento).format('lll')}</ValorHorario>
            </AreaInfo>
            <AreaInfo>
                <HorarioAgendamento>Dia da semana: </HorarioAgendamento>
                <ValorHorario>{moment(item.dataAgendamento).format('dddd')}</ValorHorario>
            </AreaInfo>
            <TouchDetalhes onPress={() => {navigation.navigate("ModalDetalhes", {dados: item})}}>
                <DetalhesAgendamento>Detalhes do Agendamento</DetalhesAgendamento>
            </TouchDetalhes>
            <AreaStatus>
                <TouchConfirmar onPress={() => DialogConfirmacao(true)}>
                    <TextStatus>Confirmar</TextStatus>
                </TouchConfirmar>
                <TouchCancelar onPress={() => DialogConfirmacao(false)}>
                    <TextStatus>Recusar</TextStatus>
                </TouchCancelar>
            </AreaStatus>
        </AreaInformacoes>
   </Container>
  );
}