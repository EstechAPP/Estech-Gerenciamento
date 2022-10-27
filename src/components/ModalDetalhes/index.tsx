import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import theme from '../../styles/theme';
import { IAgendaServicoUsuario } from '../../types/AgendaServicoUsuario';
import {
  AreaHeader,
  Container,
  TextoNome,
  AreaPreviewCliente,
  ImagemPreview,
  NomeCliente,
  Label,
  AreaDetalhes,
  TituloDetalhes,
  AreaInfoDetalhes,
  TextoTitulo,
  TextoResposta,
  AreaConfirmadoFinalizado,
  DadoConfirmadoFinalizado,
  TituloConfirmadoFinalizado,
  RespostaTituloConfirmadoFinalizado,
  TextoHoraAgendamento,
  TituloHoraAgendamento

} from './styles';

export function ModalDetalhes({route}){
  const {dados} : {dados : IAgendaServicoUsuario} = route.params;
  const navigation = useNavigation();

return (
  <Container>
    <AreaHeader>
        <TextoNome numberOfLines={1}>Detalhes agendamento</TextoNome>
        <Icon name='close' size={26} color={theme.colors.select_tab} onPress={() => navigation.goBack()} />
    </AreaHeader>
    <AreaPreviewCliente>
      <ImagemPreview source={ dados.usuarioCliente.foto_base64 ? {uri: dados.usuarioCliente.foto_base64}  : require('../../../assets/noimageavailable.png')}/>
      <Label>Cliente</Label>
      <NomeCliente>{dados.usuarioCliente.nome + " " + dados.usuarioCliente.sobrenome}</NomeCliente>
      <TextoResposta>{dados.usuarioCliente.celular}</TextoResposta>
      <TituloHoraAgendamento>Horário do agendamento</TituloHoraAgendamento>
      <TextoHoraAgendamento>{moment(dados.dataAgendamento).calendar()}</TextoHoraAgendamento>
    </AreaPreviewCliente>
    <AreaConfirmadoFinalizado>
      <DadoConfirmadoFinalizado>
        <TituloConfirmadoFinalizado>Status Agendamento</TituloConfirmadoFinalizado>
        <RespostaTituloConfirmadoFinalizado>{dados.confirmado ? "Confirmado" : dados.confirmado == null ? "Pendente" : "Recusado"}</RespostaTituloConfirmadoFinalizado>
      </DadoConfirmadoFinalizado>
      <DadoConfirmadoFinalizado>
        <TituloConfirmadoFinalizado>Serviço Finalizado</TituloConfirmadoFinalizado>
        <RespostaTituloConfirmadoFinalizado>{dados.servicoFinalizado ? "Finalizado" : "Em aberto"}</RespostaTituloConfirmadoFinalizado>
      </DadoConfirmadoFinalizado>
    </AreaConfirmadoFinalizado>
    <AreaDetalhes>
      <TituloDetalhes>Informações do serviço</TituloDetalhes>
      <AreaInfoDetalhes>
        <TextoTitulo>Descrição: </TextoTitulo>
        <TextoResposta>{dados.servicoAgenda.descricao}</TextoResposta>
      </AreaInfoDetalhes>
      <AreaInfoDetalhes>
        <TextoTitulo>Preço: </TextoTitulo>
        <TextoResposta>{dados.servicoAgenda.preco}</TextoResposta>
      </AreaInfoDetalhes>
      <AreaInfoDetalhes>
        <TextoTitulo>Tempo médio para realizar o serviço: </TextoTitulo>
        <TextoResposta>{dados.tempoeMedioServico}</TextoResposta>
      </AreaInfoDetalhes>
    </AreaDetalhes>

   </Container>
  );
}