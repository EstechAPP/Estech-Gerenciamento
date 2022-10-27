import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { Alert, Modal } from 'react-native';
import { postCancelarAgendamento, postFinalizarAgendamento } from '../../services/agenda';
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
 CancelarAgendamento,
 AreaInfo,
 ValorHorario,
 TouchDetalhes,
 TouchCancelarFinalizar
} from './styles';

export function CardAgendamento({item, index, tipoAgenda, attlista, idFuncionario} : {item: IAgendaServicoUsuario, index: number, tipoAgenda: string, attlista?: () => void, idFuncionario: number}){

    const navigation = useNavigation();

    function finalizarAgendamento(){
        Alert.alert('Finalizar agendamento', "Deseja finalizar o agendamento?", [
            {
                text: 'Sim',
                onPress: () => { 
                    postFinalizarAgendamento(item.id, true)
                    .then(response => {
                        Alert.alert(response.data.mensagem);
                        attlista();
            
                    })
                    .catch(err => {
                        Alert.alert("Tivemos um problema em processar sua requisição", err.data.mensagem);
                    })
                },
                style: "default"
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ] )
    }

    function CancelaAgendamento(){
        Alert.alert('Cancelar agendamento', "Deseja cancelar o agendamento?", [
            {
                text: 'Sim',
                onPress: () => { 
                    postCancelarAgendamento(item.id, idFuncionario)
                    .then(response => {
                        console.log(response.data.resultado)
                        Alert.alert(response.data.mensagem);
                        attlista();
                    })
                    .catch(err => {
                        Alert.alert("Tivemos um problema em processar sua requisição", err.data.mensagem);
                    })
                },
                style: "default"
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ] )
    }



return (
   <Container index={index}>
        <AreaFotoCliente>
            <FotoCliente source={item.fotoClienteBase64 ? {uri: item.fotoClienteBase64} : require('../../../assets/no-profile-icon.png')}/>
        </AreaFotoCliente>
        <AreaInformacoes>
            <AreaInfo>
                <NomeCliente>{item.nomeCliente}</NomeCliente>
            </AreaInfo>
            <AreaInfo>
                <HorarioAgendamento>Data: </HorarioAgendamento>
                <ValorHorario>{moment(item.dataAgendamento).calendar()}</ValorHorario>
            </AreaInfo>
            <TouchDetalhes onPress={() => navigation.navigate("ModalDetalhes", {dados: item})}>
                <DetalhesAgendamento>Detalhes do Agendamento</DetalhesAgendamento>
            </TouchDetalhes>
            {tipoAgenda == "Finalizar" ? (
                <TouchCancelarFinalizar tipoAgenda={tipoAgenda} onPress={finalizarAgendamento}>
                    <CancelarAgendamento>Finalizar Agendamento</CancelarAgendamento>
                </TouchCancelarFinalizar>
            ) : (
                <TouchCancelarFinalizar onPress={CancelaAgendamento}>
                    <CancelarAgendamento>Cancelar Agendamento</CancelarAgendamento>
                </TouchCancelarFinalizar>
            )}
        </AreaInformacoes>
   </Container>
  );
}