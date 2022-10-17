import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { CustomInput } from '../../../../components/CustomInput';
import PrimaryButton from '../../../../components/PrimaryButton';
import AuthContext from '../../../../context/user';
import { postVinculaFuncionario } from '../../../../services/funcionarios';
import { AreaButton, AreaForm, Container, Formulario, TextoLabel } from '../../Servicos/AddServico/styles';
import { AreaHeader, AreaMensagemNome, TextoMensagem, TextoNome } from '../styles';

export function AddFuncionario(){

  const [email,setEmail] = useState('');
  const theme = useTheme();
  const {userState} = useContext(AuthContext);

  function vincularFuncionario(){
    postVinculaFuncionario(email,userState.id)
    .then(response => {
      if(response.data.status == false){
        Alert.alert("Problema ao efetuar vínculo", response.data.mensagem)
      }
      else{
        Alert.alert("Sucesso ao vincular!", response.data.mensagem)
      }
    })
    .catch(err => {
      console.error(err)
    })
  }

return (
   <Container>
    <AreaHeader>
      <AreaMensagemNome>
        <TextoNome numberOfLines={1}>Vincular Funcionário</TextoNome>
        <TextoMensagem>Informe o email para vínculo</TextoMensagem>
      </AreaMensagemNome>
    </AreaHeader>
    <Formulario>
      <AreaForm>
          <TextoLabel>Email do funcionário</TextoLabel>
          <CustomInput backgroundColor={theme.colors.background_bege} keyboardType="email-address" value={email} onChangeText={(value) => setEmail(value)} placeholder="Ex: funcionario@email.com" placeholderTextColor={theme.colors.cinza_titulo}/>
      </AreaForm>
    </Formulario>
    <AreaButton>
      <PrimaryButton titulo="Vincular Funcionário" onPress={vincularFuncionario} />
    </AreaButton>
   </Container>
  );
}   