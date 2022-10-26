import React, { useContext, useEffect, useState } from 'react';
import { CardAgendamento } from '../../../components/CardAgendamento';
import AuthContext from '../../../context/user';
import { getServicosAguardandoFinalizacao } from '../../../services/agenda';
import { IAgendaServicoUsuario } from '../../../types/AgendaServicoUsuario';
import { ListaAgendamentos } from '../../TabNavigations/Agenda/styles';
import { AreaHeader, AreaMensagemNome, TextoMensagem, TextoNome } from '../Servicos/styles';

import {
 Container
} from './styles';

export function FinalizaAgenda(){

    const {userState} = useContext(AuthContext)
    const [servicosPendFinalizacao, setServicosPendFinalizacao] = useState<IAgendaServicoUsuario[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
      attLista()
    }, [])
    
    function attLista(){
      setRefreshing(true);
      getServicosAguardandoFinalizacao(userState.id)
      .then(response => {
        setRefreshing(false);
        setServicosPendFinalizacao(response.data.resultado)
      })
      .catch(err => {
        setRefreshing(false);
      })
    }


return (
   <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Finalizar agendamento</TextoNome>
          <TextoMensagem>Agendamentos aguardando ser finalizados.</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
      <ListaAgendamentos
        data={servicosPendFinalizacao}
        contentContainerStyle={{alignItems: 'center'}}

        ListEmptyComponent={(
          <TextoMensagem>Você não possui agendamentos aguardando finalização.</TextoMensagem>
        )}
        renderItem={({item, index} : {item : IAgendaServicoUsuario, index: number}) => (
          <CardAgendamento item={item} index={index} tipoAgenda="Finalizar" attlista={attLista} idFuncionario={userState.id} />
        )}
      />
   </Container>
  );
}