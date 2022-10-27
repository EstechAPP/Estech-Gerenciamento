import React, { ComponentProps, useCallback, useContext, useEffect, useState } from 'react';
import {ActivityIndicator, Alert, StatusBar} from 'react-native'
import { useTheme } from 'styled-components';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 FotoUsuario,
 AreaInformacoes,
 CardFaturamento,
 TextoFaturamento,
 ValorFaturamento,
 CardAvaliacao,
 TextoAvaliacao,
 ValorAvaliacao,
 MiniCard,
 TextoMiniCard,
 ValorMiniCard,
 AreaMiniCards,
 AreaProximoCliente,
 TextoProximoCliente,
 ProximoClienteVazio

} from './styles';

import AuthContext from '../../../context/user';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { CardAgendamento } from '../../../components/CardAgendamento';
import { getInfoHomeFuncionario, getProximaClienteFuncionario} from '../../../services/agenda';
import { IAgendaServicoUsuario } from '../../../types/AgendaServicoUsuario';
import axios from 'axios';
import { IInfoHomeFuncionario } from '../../../types/infoHomeFuncionario';

export default function TelaHome(){

  const theme = useTheme();
  const navigation = useNavigation();
  const {userState} = useContext(AuthContext);
  const [infoFuncionario, setInfoFuncionario] = useState<IInfoHomeFuncionario>();
  const [proximoCliente, setProximoCliente] = useState<IAgendaServicoUsuario>()
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const isFocused = useIsFocused();

  const requisicaoum = getInfoHomeFuncionario(userState.id);
  const requisicaodois = getProximaClienteFuncionario(userState.id)

  useFocusEffect(
    useCallback(() => {
      setRefreshing(true)
      axios.all([requisicaoum, requisicaodois])
      .then(
        axios.spread((...responses) => {
          const responseum = responses[0].data.resultado;
          const responsedois = responses[1].data.resultado;
          setInfoFuncionario(responseum)
          setProximoCliente(responsedois)
          setRefreshing(false)
        })
      )
      .catch(err => {
        setRefreshing(false)
        console.error(err);
      })
    }, [isFocused])
  )

  async function atualizarProximoCliente(){
    const response = await getProximaClienteFuncionario(userState.id)

    if(response.data){
      setProximoCliente(response.data.resultado)
    }
  }

return (
  <Container>
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome numberOfLines={1} >{userState.nome} {userState.sobrenome}</TextoNome>
      </AreaMensagemNome>
      {userState.foto_base64 ? (
        <FotoUsuario source={{uri: userState.foto_base64}} />
      )
    : (
        <FotoUsuario source={require('../../../../assets/no-profile-icon.png')} />
    )}
    </AreaHeader>
    <AreaInformacoes>
      <CardFaturamento>
        <TextoFaturamento>
          Faturamento do dia sobre seus serviços prestados
        </TextoFaturamento>
        <ValorFaturamento>
        {refreshing ? <ActivityIndicator/> : infoFuncionario?.faturamentoDia}
        </ValorFaturamento>
      </CardFaturamento>
      {/* <CardAvaliacao>
        <TextoAvaliacao>
          Avaliação media de{'\n'}sua empresa
        </TextoAvaliacao>
        <ValorAvaliacao>
        {refreshing ? <ActivityIndicator/> : infoFuncionario?.mediaEmpresa}
        </ValorAvaliacao>
      </CardAvaliacao> */}
       <AreaMiniCards>
        <MiniCard>
          <TextoMiniCard>
            Avaliação média da empresa
          </TextoMiniCard>
          <ValorMiniCard>
          {refreshing ? <ActivityIndicator/> : infoFuncionario?.mediaEmpresa}
          </ValorMiniCard>
        </MiniCard>
        <MiniCard>
          <TextoMiniCard>
            Sua respectiva avaliação
          </TextoMiniCard>
          <ValorMiniCard>
            {refreshing ? <ActivityIndicator/> : infoFuncionario?.mediaFuncionario}
          </ValorMiniCard>
        </MiniCard>
      </AreaMiniCards>
      <AreaMiniCards>
        <MiniCard>
          <TextoMiniCard>
            Aguardando Confirmação
          </TextoMiniCard>
          <ValorMiniCard>
          {refreshing ? <ActivityIndicator/> : infoFuncionario?.aguardandoConfirmacao}
          </ValorMiniCard>
        </MiniCard>
        <MiniCard>
          <TextoMiniCard>
            Serviços realizados
          </TextoMiniCard>
          <ValorMiniCard>
            {refreshing ? <ActivityIndicator/> : infoFuncionario?.servicosRealizados}
          </ValorMiniCard>
        </MiniCard>
      </AreaMiniCards>
        <TextoProximoCliente>
          Próximo cliente
        </TextoProximoCliente>
      <AreaProximoCliente>
      {refreshing ? <ActivityIndicator/> : 
        proximoCliente != null ? 
        <CardAgendamento item={proximoCliente} tipoAgenda="Normal" index={0} attlista={atualizarProximoCliente} idFuncionario={userState.id} />
        :
        <ProximoClienteVazio>Você não possui agendamento.</ProximoClienteVazio>
      }
      </AreaProximoCliente>
    </AreaInformacoes>
   </Container>
  );
}