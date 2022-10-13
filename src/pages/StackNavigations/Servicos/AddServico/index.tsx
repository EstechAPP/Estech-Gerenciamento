import { Route, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { CustomInput } from '../../../../components/CustomInput';
import PrimaryButton from '../../../../components/PrimaryButton';
import AuthContext from '../../../../context/user';
import { AlterarServicoAPI, CriarServicoAPI } from '../../../../services/servicos';
// import  Icon from 'react-native-vector-icons/MaterialIcons';
import { AreaHeader } from '../styles';

import {AreaMensagemNome, Container, Formulario, TextoMensagem, 
    TextoNome,
    AreaForm,
    TextoLabel,
    AreaButton,

} from './styles';

export function AddServico({route}) {
    const theme = useTheme();
    const {userState} = useContext(AuthContext);
    const {idServico} = route.params;
    const [nomeServico, setNomeServico] = useState('');
    const [preco, setPreco] = useState<Number>(0);
    const [tempoMedio, setTempoMedio] = useState('');
    const navigation = useNavigation();

    function cadastrarServico(){
        if(idServico == 0){
            CriarServicoAPI(idServico,nomeServico,preco,tempoMedio,userState.donoEmpresa)
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
            AlterarServicoAPI(idServico,nomeServico,preco,tempoMedio,userState.donoEmpresa)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.error(err)
            })
        }
    }

  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>{idServico == 0 ? "Cadastrar novo serviço" : "Alterar serviço"}</TextoNome>
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
            <CustomInput backgroundColor={theme.colors.background_bege} value={preco.toString()} onChangeText={(value) => setPreco(value)}  placeholder="Ex: 20,00" placeholderTextColor={theme.colors.cinza_titulo}/>
        </AreaForm>
        <AreaForm>
            <TextoLabel>Tempo médio de execução</TextoLabel>
            <CustomInput backgroundColor={theme.colors.background_bege} value={tempoMedio} onChangeText={(value) => setTempoMedio(value)}  placeholder="Ex: 00:30" placeholderTextColor={theme.colors.cinza_titulo}/>
        </AreaForm>
      </Formulario>
      <AreaButton>
        <PrimaryButton titulo={idServico == 0 ? "Cadastrar novo serviço" : "Alterar serviço"} onPress={() => {cadastrarServico()}} />
      </AreaButton>
    </Container>
  );
}
