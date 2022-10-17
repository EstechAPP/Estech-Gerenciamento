import { Route, useNavigation } from '@react-navigation/native';
import currency from 'currency.js';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { useTheme } from 'styled-components';
import { TouchButton } from '../../../../components/CardProfissional/styles';
import { CustomInput, CustomMaskInput } from '../../../../components/CustomInput';
import PrimaryButton from '../../../../components/PrimaryButton';
import AuthContext from '../../../../context/user';
import Icon from'react-native-vector-icons/MaterialIcons';
import { AlterarServicoAPI, CriarServicoAPI, deleteServicosEmpresa } from '../../../../services/servicos';
import { IServico } from '../../../../types/servico';
// import  Icon from 'react-native-vector-icons/MaterialIcons';
import { AreaHeader } from '../styles';

import {AreaMensagemNome, Container, Formulario, TextoMensagem, 
    TextoNome,
    AreaForm,
    TextoLabel,
    AreaButton,
    TouchVinculo,
    TextoVinculo,
    AreaFormTouch
} from './styles';

export function AddServico({route}) {
    const theme = useTheme();
    const {userState} = useContext(AuthContext);
    const {objServico} : {objServico : IServico} = route.params;
    const [nomeServico, setNomeServico] = useState(objServico.id != 0 ? objServico.descricao : "");
    const [preco, setPreco] = useState(objServico.id != 0 ? objServico.preco : "");
    const [tempoMedio, setTempoMedio] = useState(objServico.id != 0 ? objServico.tempomedio : "");
    const navigation = useNavigation();

    const tempoMedioMask = [/\d/, /\d/,":",/\d/, /\d/];
  
    
    function cadastrarServico(){
        if(objServico.id == 0){
            CriarServicoAPI(objServico.id,nomeServico,preco,tempoMedio,userState.donoEmpresa)
            .then(response => {
                if(response.data.status){
                    Alert.alert(response.data.mensagem)
                    navigation.goBack();
                }
            })
            .catch(err => {
                console.error(err)
            })
        }else{
            AlterarServicoAPI(objServico.id,nomeServico,preco,tempoMedio,userState.donoEmpresa)
            .then(response => {
                if(response.data.status){
                  Alert.alert(response.data.mensagem)
                  navigation.goBack();
              }
            })
            .catch(err => {
                console.error(err)
            })
        }
    }

    function apagarServico(){
      deleteServicosEmpresa(objServico.id)
      .then(response => {
        if(response.data.status){
          Alert.alert(response.data.mensagem)
          navigation.goBack();
        }
      })
      .catch(err => {
        if(err.data.status){
          Alert.alert(err.data.mensagem)
        }
      })
    }

  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>{objServico.id == 0 ? "Cadastrar novo serviço" : "Alterar serviço"}</TextoNome>
          <TextoMensagem>Necessário preenchimento total do formulário.</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
      <Formulario>
        <AreaForm>
            <TextoLabel>Nome do serviço</TextoLabel>
            <CustomInput backgroundColor={theme.colors.background_bege} value={nomeServico} onChangeText={(value) => setNomeServico(value)} placeholder="Ex: Corte de Cabelo" placeholderTextColor={theme.colors.cinza_titulo}/>
        </AreaForm>
        <AreaForm>
            <TextoLabel>Preço</TextoLabel>
            <CustomMaskInput 
            mask={Masks.BRL_CURRENCY}
            backgroundColor={theme.colors.background_bege} keyboardType="number-pad" value={preco.toString()} onChangeText={(mask, unmask) => setPreco(mask)}  placeholder="Ex: 20,00" placeholderTextColor={theme.colors.cinza_titulo}/>
        </AreaForm>
        <AreaForm>
            <TextoLabel>Tempo médio de execução</TextoLabel>
            <CustomMaskInput mask={tempoMedioMask} maxLength={5} keyboardType="number-pad" backgroundColor={theme.colors.background_bege} value={tempoMedio} onChangeText={(value) => setTempoMedio(value)}  placeholder="Ex: 00:30" placeholderTextColor={theme.colors.cinza_titulo}/>
        </AreaForm>
        {objServico.id != 0 && (
          <AreaFormTouch>
            <TouchVinculo backgroundColor="transparent" onPress={() => {navigation.navigate('VincularFuncionariosServico', {objServico: objServico})}}>
              <Icon name='add-circle-outline' size={24} color={theme.colors.cinza_titulo}/>
              <TextoVinculo>Vincular funcionários ao serviço</TextoVinculo>
            </TouchVinculo>
          </AreaFormTouch>
        )}
      </Formulario>
      <AreaButton>
        <PrimaryButton titulo={objServico?.id == 0 ? "Cadastrar novo serviço" : "Alterar serviço"} onPress={() => {cadastrarServico()}} />
        {
          objServico?.id != 0 && (
            <PrimaryButton titulo='Apagar serviço' backgroundColor={theme.colors.vermelho_closed} onPress={() => {apagarServico()}} />
          )
        }
      </AreaButton>
    </Container>
  );
}
