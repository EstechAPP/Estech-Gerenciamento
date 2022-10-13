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
 AreaInfo,
 ValorHorario,
 TouchDetalhes,
 TouchCancelar,
 AreaStatus,
 TouchConfirmar,
 TextStatus,
} from './styles';

export function CardConfirmacao({item, index} : {item: IAgendamento, index: number}){
return (
   <Container index={index} >
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
            <AreaStatus>
                <TouchConfirmar>
                    <TextStatus>Confirmar</TextStatus>
                </TouchConfirmar>
                <TouchCancelar>
                    <TextStatus>Recusar</TextStatus>
                </TouchCancelar>
            </AreaStatus>
        </AreaInformacoes>
   </Container>
  );
}