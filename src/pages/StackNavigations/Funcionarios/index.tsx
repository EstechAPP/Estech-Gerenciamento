import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import {AreaHeader, AreaMensagemNome, Container, TextoMensagem, TextoNome} from './styles';

export function Funcionarios() {
  const theme = useTheme();
  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Funcionários</TextoNome>
          <TextoMensagem>Funcionários de sua empresa</TextoMensagem>
        </AreaMensagemNome>
        <Icon name='person-add-alt' size={36} color={theme.colors.select_tab}/>
      </AreaHeader>
    </Container>
  );
}