import React, { useContext } from 'react';
import {IUser} from '../../types/user';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  FotoProfissional,
  AreaNomeCargo,
  NomeProfissional,
  CargoProfissional,
  AreaProfissional,
  AreaButtons,
  TouchButton,
} from './styles';
import theme from '../../styles/theme';
import {Alert} from 'react-native';
import { postDesviculaDono, postDesvinculaFuncionario, postVinculaDono } from '../../services/funcionarios';
import AuthContext from '../../context/user';

export function CardProfissional({data, index, atualizaAgenda}: {data: IUser; index: number, atualizaAgenda: () => void}) {

  const {userState, logout} = useContext(AuthContext)
    
  function dialogVincula() {
    Alert.alert(
      'Vínculo de dono',
      `Deseja conceder privilégio de dono ao funcionário: ${data.nome} ${data.sobrenome} ?`,
      [
        {
          text: 'Sim',
          onPress: () => vincularDono(),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  function vincularDono(){
    postVinculaDono(data.email, userState.donoEmpresa)
    .then(response => {
      Alert.alert('Privilégio dono', response.data.mensagem)
      atualizaAgenda();
    })
    .catch(err => {
      console.error(err)
    })
  }

  function dialogDesvinculaFuncionario() {
    Alert.alert(
      'Desvinculo de Funcionário',
      `Deseja desvincular ${data.nome} ${data.sobrenome} de sua empresa?`,
      [
        {
          text: 'Sim',
          onPress: () => dialogConfirmaDesvinculo(),
        },
        {
          text: 'Não',
          style: 'cancel'
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  function dialogConfirmaDesvinculo() {
    Alert.alert(
      'ATENÇÃO',
      `Desvínculo de funcionário ocasionárá o cancelamento de todos os agendamentos do funcionário, esta ação é irreversivel.`,
      [
        {
          text: 'Sim',
          onPress: () => desvincularrFuncionario(),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  function desvincularrFuncionario() {
    postDesvinculaFuncionario(data.email,userState.id)
    .then(response => {
      console.log(response.data)
      atualizaAgenda();
    })
    .catch(err => {
      console.error(err)
    })
  }

  function dialogDesvinculaDono(){
    Alert.alert(
      'ATENÇÃO',
      `Deseja retirar o Privilégio de Dono do usuário: ${data.nome} ${data.sobrenome}?`,
      [
        {
          text: 'Sim',
          onPress: () => desviculaDono(),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  }

  function desviculaDono(){
    postDesviculaDono(data.email,data.donoEmpresa)
    .then(response => {
      Alert.alert(response.data.mensagem);
      if(data.email == userState.email && response.data.status == true){
        // Alert.alert(response.data.mensagem)
        logout();
      }
      atualizaAgenda();
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <Container>
      <AreaProfissional index={index} data={data}>
        <FotoProfissional
          source={
            data.foto_base64
              ? {uri: data.foto_base64}
              : require('../../../assets/fotobarbearia.png')
          }
        />
        <AreaNomeCargo>
          <NomeProfissional>
            {data.nome} {data.sobrenome}
          </NomeProfissional>
          {data.donoEmpresa != 0 && (
            <CargoProfissional>Privilégio: Dono</CargoProfissional>
          )}
        </AreaNomeCargo>
      </AreaProfissional>
      <AreaButtons>
      {data.donoEmpresa == 0 && (
        <TouchButton
          backgroundColor={theme.colors.select_tab}
          onPress={dialogVincula}>
          <Icon name="hail" size={20} />
        </TouchButton>
      )}
      {data.donoEmpresa != 0 && (
        <TouchButton
          backgroundColor={theme.colors.select_tab}
          onPress={dialogDesvinculaDono}
        >
          <Icon name="person-remove" size={20} />
        </TouchButton>
      )}
        <TouchButton
          onPress={dialogDesvinculaFuncionario}
        >
          <Icon
            name="delete-outline"
            size={20}
          />
        </TouchButton>
      </AreaButtons>
    </Container>
  );
}
