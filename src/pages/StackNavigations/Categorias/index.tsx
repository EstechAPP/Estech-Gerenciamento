import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components';

import {AreaHeader, AreaMensagemNome, Container, TextoMensagem, TextoNome} from './styles';

export function Categorias() {
  const theme = useTheme();
  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Categorias</TextoNome>
          <TextoMensagem>Selecione as categorias que sua empresa se encaixa.</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
    </Container>
  );
}