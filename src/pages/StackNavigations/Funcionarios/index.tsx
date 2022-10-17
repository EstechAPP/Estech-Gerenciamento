import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';
import { CardProfissional } from '../../../components/CardProfissional';
import AuthContext from '../../../context/user';
import { getFuncionariosEmpresa } from '../../../services/funcionarios';
import { IUser } from '../../../types/user';

import {AreaHeader, AreaMensagemNome, Container, ListaFuncionarios, TextoEmpty, TextoMensagem, TextoNome} from './styles';

export function Funcionarios() {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const {userState} = useContext(AuthContext)
  const navigation = useNavigation();
  const [funcionarios, setFuncionarios] = useState<IUser[]>([])

  function carregaFuncionarios(){
    getFuncionariosEmpresa(userState.donoEmpresa)
    .then(response => {
      setFuncionarios(response.data.resultado)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useFocusEffect(
    useCallback(() => {
      carregaFuncionarios()
    }, [isFocused]),
  );

  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Funcionários</TextoNome>
          <TextoMensagem>Funcionários de sua empresa</TextoMensagem>
        </AreaMensagemNome>
        <Icon name='person-add-alt' size={36} color={theme.colors.select_tab} onPress={() => {navigation.navigate('AddFuncionario')}}/>
      </AreaHeader>
      <ListaFuncionarios
        data={funcionarios}
        renderItem={({item}) => 
          <CardProfissional data={item} atualizaAgenda={carregaFuncionarios}/>
        }
        contentContainerStyle={{alignItems: 'center'}}
        ListEmptyComponent={(
          <TextoEmpty>Você não possui funcionários cadastrados.</TextoEmpty>
        )}
      />
    </Container>
  );
}