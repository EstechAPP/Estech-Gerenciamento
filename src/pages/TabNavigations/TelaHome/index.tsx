import React, { ComponentProps, useContext, useEffect, useState } from 'react';
import {Alert, StatusBar} from 'react-native'
import { useTheme } from 'styled-components';

import {
 Container,
 AreaHeader,
 AreaMensagemNome,
 TextoMensagem,
 TextoNome,
 FotoUsuario,
 AreaInformacoes,
 CardFaturamento,
 TextoFaturamento,
 ValorFaturamento,
 CardAvaliacao,
 TextoAvaliacao,
 ValorAvaliacao,
 MiniCard,
 TextoMiniCard,
 ValorMiniCard,
 AreaMiniCards,
 AreaProximoCliente,
 TextoProximoCliente,

} from './styles';

import AuthContext from '../../../context/user';
import { ICategorias } from '../../../types/categorias';
import { IEmpresa } from '../../../types/empresa';
import { useNavigation } from '@react-navigation/native';

export default function TelaHome(){

  const theme = useTheme();
  const navigation = useNavigation();
  const {userState} = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [listaCategorias, setListaCategorias] = useState<ICategorias[]>([]);
  const [listaEstabelecimentos, setListaEstabelecimentos] = useState<IEmpresa[]>([]);


return (
  <Container>
      {/* <Spinner visible={visible} customIndicator={(
        <SpinnerLoading titulo='Carregando...' />
      )}  /> */}
     <StatusBar backgroundColor={theme.colors.background_screens} barStyle={'dark-content'} />
    <AreaHeader>
      <AreaMensagemNome>
        <TextoMensagem>Bem vindo,</TextoMensagem>
        <TextoNome numberOfLines={1} >{userState.nome} {userState.sobrenome}</TextoNome>
      </AreaMensagemNome>
      {userState.foto_base64 ? (
        <FotoUsuario source={{uri: userState.foto_base64}} />
      )
    : (
        <FotoUsuario source={require('../../../../assets/no-profile-icon.png')} />
    )}
    </AreaHeader>
    <AreaInformacoes>
      <CardFaturamento>
        <TextoFaturamento>
          Faturamento do dia sobre seus serviços prestados
        </TextoFaturamento>
        <ValorFaturamento>
          R$ 120,00
        </ValorFaturamento>
      </CardFaturamento>
      <CardAvaliacao>
        <TextoAvaliacao>
          Avaliação media de{'\n'}sua empresa
        </TextoAvaliacao>
        <ValorAvaliacao>
          5.0
        </ValorAvaliacao>
      </CardAvaliacao>
      <AreaMiniCards>
        <MiniCard>
          <TextoMiniCard>
            Aguardando Confirmação
          </TextoMiniCard>
          <ValorMiniCard>
            100
          </ValorMiniCard>
        </MiniCard>
        <MiniCard>
          <TextoMiniCard>
            Serviços realizados
          </TextoMiniCard>
          <ValorMiniCard>
            100
          </ValorMiniCard>
        </MiniCard>
      </AreaMiniCards>
      <AreaProximoCliente>
        <TextoProximoCliente>
          Próximo cliente
        </TextoProximoCliente>
      </AreaProximoCliente>
    </AreaInformacoes>
   </Container>
  );
}