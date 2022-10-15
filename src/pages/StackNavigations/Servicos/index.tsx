import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';
import { CardServicos } from '../../../components/CardServicos';
import AuthContext from '../../../context/user';
import { getServicosEmpresa } from '../../../services/servicos';
import { IServico } from '../../../types/servico';

import {AreaHeader, AreaMensagemNome, Container, ListaServicos, TextoEmpty, TextoMensagem, TextoNome} from './styles';

export function Servicos() {
  
  const theme = useTheme();
  const navigation = useNavigation();
  const {userState} = useContext(AuthContext);
  const [servicos, setServicos] = useState<IServico[]>([])
  const isFocused = useIsFocused();

  const objServico : IServico = {
    id: 0,
    descricao: "",
    empresa_id: 0,
    preco: 0,
    tempomedio: "",
    img_base64: ""
  }

  function carregaServicos(){
    getServicosEmpresa(userState.donoEmpresa)
    .then(response => {
      setServicos(response.data.resultado)
    })
    .catch(err => {
      console.error(err)
    })
  }


  useFocusEffect(
    useCallback(() => {
      carregaServicos()
    }, [isFocused]),
  );


  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Serviços</TextoNome>
          <TextoMensagem>Seus serviços cadastrados.</TextoMensagem>
        </AreaMensagemNome>
        <Icon name='add-circle-outline' size={36} color={theme.colors.select_tab} onPress={() => navigation.navigate('AddServico', {objServico})}/>
      </AreaHeader>
      <ListaServicos
        data={servicos}
        renderItem={({item}) => 
          <CardServicos data={item}/>
        }
        contentContainerStyle={{alignItems: 'center'}}
        ListEmptyComponent={(
          <TextoEmpty>Você não possui serviços cadastrados.</TextoEmpty>
        )}
      />
    </Container>
  );
}
