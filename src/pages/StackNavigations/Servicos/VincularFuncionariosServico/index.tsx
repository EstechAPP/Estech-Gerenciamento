import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { CardProfissionalSelect } from '../../../../components/CardProfissionalSelect';
import { CardServicoPreview } from '../../../../components/CardServicos';
import PrimaryButton from '../../../../components/PrimaryButton';
import AuthContext from '../../../../context/user';
import { getFuncionariosEmpresa } from '../../../../services/funcionarios';
import { getBuscaProfissionaisServico, postDesvincularProfissionalServico, postVincularProfissionalServico } from '../../../../services/servicos';
import { IServico } from '../../../../types/servico';
import { IUser } from '../../../../types/user';
import { AreaHeader, AreaMensagemNome, TextoMensagem, TextoNome  } from '../styles';

import {
 Container,
 Formulario,
 AreaForm,
 AreaButton,
 ListaFuncionarios
} from './styles';

export function VincularFuncionariosServico({route}){

  const {objServico} : {objServico : IServico} = route.params
  const {userState} = useContext(AuthContext);
  
  const [funcionarios, setFuncionarios] = useState<IUser[]>([]);

  const [funcionariosSelected, setFuncionariosSelected] = useState<Number[]>([])

  const requisicaoum = getFuncionariosEmpresa(userState.donoEmpresa);
  const requisicaodois = getBuscaProfissionaisServico(objServico.id);

  useEffect(() => {
  
    axios.all([requisicaoum, requisicaodois])
    .then(
      axios.spread((...responses) => {

        setFuncionarios([]);
        const arrayVinculos : Number[] = []

        const responseum = responses[0].data.resultado;
        const responsedois = responses[1].data.resultado;
        setFuncionarios(responseum)

        responseum.forEach(value => {
          responsedois.forEach(value2 => {
            if(value2.id == value.id){
              arrayVinculos.push(value2.id)
            }
          })
        })
        
        setFuncionariosSelected(arrayVinculos)
      }))
      .catch(errors => {
        console.error(errors);
    })
  }, [])


  function selectItem(item : IUser){
    if (funcionariosSelected.includes(item.id)) {
      postDesvincularProfissionalServico(item.id, objServico.id)
      .then(response => {
        Alert.alert("Desvinculado com sucesso!", response.data.mensagem)
        const newListItems = funcionariosSelected.filter(listItem => listItem !== item.id);
        return setFuncionariosSelected([...newListItems]);
      })
      .catch(err => {
        Alert.alert("Tivemos um problema ao desvincular funcionário", err.data.mensagem)
      })
    }else{
      postVincularProfissionalServico(item.id, objServico.id)
      .then(response => {
        Alert.alert("Vinculado com sucesso!", response.data.mensagem)
        return setFuncionariosSelected([...funcionariosSelected, item.id]);
      })
      .catch(err => {
        Alert.alert("Tivemos um problema ao vincular funcionário", err.data.mensagem)
      })
    }
  }

return (
   <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Vincular Funcionário</TextoNome>
          <TextoMensagem>Vincular funcionário ao serviço</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
      <Formulario>
        <AreaForm>
          <TextoMensagem>Serviço escolhido</TextoMensagem>
          <CardServicoPreview data={objServico} />
        </AreaForm>
      </Formulario>
        <ListaFuncionarios
        data={funcionarios}
        contentContainerStyle={{justifyContent: 'center', width: '100%'}}
        renderItem={({item, index}) => (
          <CardProfissionalSelect data={item} selected={funcionariosSelected.includes(item.id)} onPress={() => {selectItem(item)}} />
        )}
        />
      {/* <AreaButton>
          <PrimaryButton titulo={`Vincular funcionários ${'\n'} ao serviço`} />
      </AreaButton> */}
   </Container>
  );
}