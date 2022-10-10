import React from 'react';
import { CardAgendamento } from '../../../components/CardAgendamento';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 ListaAgendamentos
} from './styles';

export function Pendentes(){

  const data = [1,2,3,4,5]

return (
   <Container>
    <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Pendentes</TextoNome>
          <TextoMensagem>Serviços aguardando confirmação</TextoMensagem>
        </AreaMensagemNome>
    </AreaHeader>
    <ListaAgendamentos
      data={data}
      renderItem={({item}) => (
        <CardAgendamento/>
      )}
    />
   </Container>
  );
}