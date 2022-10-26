import React, { useContext, useEffect, useState } from 'react';
import { CardConfirmacao } from '../../../components/CardConfirmacao';
import AuthContext from '../../../context/user';
import { getPendentesFuncionario } from '../../../services/agenda';
import { IAgendaServicoUsuario } from '../../../types/AgendaServicoUsuario';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 ListaAgendamentos
} from './styles';

export function Pendentes(){
  
  const {userState} = useContext(AuthContext)
  const [pendentes, setPendentes] = useState<IAgendaServicoUsuario[]>([])
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    attLista()
  }, [])


  function attLista(){
    setRefreshing(true);
    getPendentesFuncionario(userState.id)
    .then(response => {
      setRefreshing(false);
      setPendentes(response.data.resultado)
    })
    .catch(err => {
      setRefreshing(false);
    })
  }

return (
   <Container>
    <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Pendentes</TextoNome>
          <TextoMensagem>Serviços aguardando confirmação</TextoMensagem>
        </AreaMensagemNome>
    </AreaHeader>
    <ListaAgendamentos
      data={pendentes}
      contentContainerStyle={{alignItems: 'center'}}
      ListEmptyComponent={(
        <TextoMensagem>Você não possui agendamentos pendentes.</TextoMensagem>
      )}
      renderItem={({item, index}) => (
        <CardConfirmacao item={item} index={index} attlista={attLista}/>
      )}
    />
   </Container>
  );
}