import React from 'react';
import { IAgendamento } from '../../types/agenda';

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
 TouchCancelar,
} from './styles';

export function CardAgendamento({item, index} : {item: IAgendamento, Index: number}){
return (
   <Container index={index}>
        <AreaFotoCliente>
            <FotoCliente source={require('../../../assets/no-profile-icon.png')}/>
        </AreaFotoCliente>
        <AreaInformacoes>
            <AreaInfo>
                <NomeCliente>Matheus Henrique Carvalho Pereira</NomeCliente>
            </AreaInfo>
            <AreaInfo>
                <HorarioAgendamento>Data: </HorarioAgendamento>
                <ValorHorario>Hoje às 15:30</ValorHorario>
            </AreaInfo>
            <TouchDetalhes>
                <DetalhesAgendamento>Detalhes do Agendamento</DetalhesAgendamento>
            </TouchDetalhes>
            <TouchCancelar>
                <CancelarAgendamento>Cancelar Agendamento</CancelarAgendamento>
            </TouchCancelar>
        </AreaInformacoes>
   </Container>
  );
}