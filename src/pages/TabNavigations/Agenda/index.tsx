import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';
import { CardAgendamento } from '../../../components/CardAgendamento';
import AuthContext from '../../../context/user';
import { getAgendamentosFuncionarios } from '../../../services/agenda';
import { IAgendamento } from '../../../types/agenda';
import { IAgendaServicoUsuario } from '../../../types/AgendaServicoUsuario';

import {
  AreaHeader,
  AreaMensagemNome,
  Container,
  ListaAgendamentos,
  TextoMensagem,
  TextoNome,
} from './styles';

export function TelaAgenda() {
  const {userState} = useContext(AuthContext)
  const [agenda, setAgenda] = useState<IAgendaServicoUsuario[]>([])
  const [refreshing, setRefreshing] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    attLista()
  }, [])
  
  function attLista(){
    setRefreshing(true);
    getAgendamentosFuncionarios(userState.id)
    .then(response => {
      setRefreshing(false);
      setAgenda(response.data.resultado)
    })
    .catch(err => {
      setRefreshing(false);
    })
  }

  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Agenda</TextoNome>
          <TextoMensagem>Serviços dos próximos dias</TextoMensagem>
        </AreaMensagemNome>
        <Icon name='calendar-check-o' size={36} color={theme.colors.select_tab} onPress={() => navigation.navigate('FinalizaAgenda')}/>
      </AreaHeader>
      <ListaAgendamentos
        data={agenda}
        contentContainerStyle={{alignItems: 'center'}}
        ListEmptyComponent={(
          <TextoMensagem>Você não possui agendamentos.</TextoMensagem>
        )}
        renderItem={({item, index} : {item : IAgendaServicoUsuario, index: number}) => (
          <CardAgendamento item={item} index={index} tipoAgenda="Cancelar" attlista={attLista} idFuncionario={userState.id} />
        )}
      />
    </Container>
  );
}
