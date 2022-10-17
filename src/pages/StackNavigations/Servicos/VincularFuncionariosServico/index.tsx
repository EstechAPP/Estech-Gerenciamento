import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CardProfissionalSelect } from '../../../../components/CardProfissionalSelect';
import { CardServicoPreview } from '../../../../components/CardServicos';
import PrimaryButton from '../../../../components/PrimaryButton';
import AuthContext from '../../../../context/user';
import { getFuncionariosEmpresa } from '../../../../services/funcionarios';
import { getBuscaProfissionaisServico, postVincularProfissionalServico } from '../../../../services/servicos';
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

  const [funcionariosVinculosOld, setFuncionariosVinculosOld] = useState<Number[]>([]);
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

        responsedois.forEach(value => {
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
      const newListItems = funcionariosSelected.filter(listItem => listItem !== item.id);
      return setFuncionariosSelected([...newListItems]);
    }
    setFuncionariosSelected([...funcionariosSelected, item.id]);
  }




  function vincularFuncionarios(){
    funcionariosSelected.forEach(value => {
      if(funcionariosVinculosOld.indexOf(value) == -1){
        // POSSUI O VALOR ENTÃO NÃO VAI FAZER NADA;
        console.log('DELETE: ' + value);
      }
      else{
      }
    })

    // funcionariosVinculosOld.forEach(value => {
    //   if(funcionariosSelected.includes(value)){
    //     console.log('CREATE: ' + value);
    //   }
    // })
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
      <AreaButton>
          <PrimaryButton titulo={`Vincular funcionários ${'\n'} ao serviço`} onPress={vincularFuncionarios} />
      </AreaButton>
   </Container>
  );
}