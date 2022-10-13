import React from 'react';
import { CardAgendamento } from '../../../components/CardAgendamento';
import { IAgendamento } from '../../../types/agenda';

import {
  AreaHeader,
  AreaMensagemNome,
  Container,
  ListaAgendamentos,
  TextoMensagem,
  TextoNome,
} from './styles';

export function TelaAgenda() {

  const data = [1,2,3,4,5]
  
  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Agenda</TextoNome>
          <TextoMensagem>Serviços dos próximos dias</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
      <ListaAgendamentos
        data={data}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item, index} : {item : IAgendamento, index: number}) => (
          <CardAgendamento item={item} index={index} />
        )}
      />
    </Container>
  );
}
