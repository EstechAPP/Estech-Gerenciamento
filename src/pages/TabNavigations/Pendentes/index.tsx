import React from 'react';
import { CardConfirmacao } from '../../../components/CardConfirmacao';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 ListaAgendamentos
} from './styles';

export function Pendentes(){

  const data = [1,2,3,4]

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
      contentContainerStyle={{alignItems: 'center'}}
      ListEmptyComponent={(
        <TextoMensagem>Você não possui agendamentos pendentes.</TextoMensagem>
      )}
      renderItem={({item, index}) => (
        <CardConfirmacao item={item} index={index}/>
      )}
    />
   </Container>
  );
}