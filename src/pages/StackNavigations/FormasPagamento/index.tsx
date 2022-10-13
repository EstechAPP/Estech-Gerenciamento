import React from 'react';
import { useTheme } from 'styled-components';

import {AreaHeader, AreaMensagemNome, Container, TextoMensagem, TextoNome} from './styles';

export function FormasPagamento() {
  const theme = useTheme();
  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Formas de Pagamento</TextoNome>
          <TextoMensagem>Selecione as formas de pagamento que sua empresa trabalha</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
    </Container>
  );
}