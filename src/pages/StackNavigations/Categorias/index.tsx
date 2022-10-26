import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { CardCategoriaSelect } from '../../../components/CardCategoriaSelect';
import AuthContext from '../../../context/user';
import { getCategoriasEmpresa, getTiposCategoriasAll, postDesvinculaCategoria, postVinculaCategoria } from '../../../services/categorias';
import { ICategorias } from '../../../types/categorias';

import {AreaHeader, AreaMensagemNome, Container, ListaCategorias, TextoMensagem, TextoNome} from './styles';

export function Categorias() {
  const theme = useTheme();
  const {userState} = useContext(AuthContext)
  const [categorias, setCategorias] = useState<ICategorias[]>([])
  const [tiposCategoriasSelected, setTiposCategoriasSelected] = useState<Number[]>([]);

  const requisicaoum = getTiposCategoriasAll();
  const requisicaodois = getCategoriasEmpresa(userState.donoEmpresa);

  useEffect(() => {
    axios.all([requisicaoum, requisicaodois])
    .then(
      axios.spread((...responses) => {
  
        setTiposCategoriasSelected([]);
        const arrayVinculos : Number[] = []
        setCategorias([])
        const responseum = responses[0].data.resultado;
        const responsedois = responses[1].data.resultado;
        
        setCategorias(responseum);
        responseum.forEach(value => {
          responsedois.forEach(value2 => {
            if(value2.id == value.id){
              arrayVinculos.push(value2.id)
            }
          })
        })
        
        setTiposCategoriasSelected(arrayVinculos)
      }))
      .catch(errors => {
        console.error(errors);
    })
  }, [])
  
  function selectItem(item : ICategorias){
    if (tiposCategoriasSelected.includes(item.id)) {
      postDesvinculaCategoria(item.id,userState.donoEmpresa)
      .then(response => {
        Alert.alert("Desvinculado com sucesso!", response.data.mensagem)
        const newListItems = tiposCategoriasSelected.filter(listItem => listItem !== item.id);
        return setTiposCategoriasSelected([...newListItems]);
      })
      .catch(error => {
        Alert.alert("Tivemos um problema ao desvincular funcionário", error.data.mensagem)
      })
    }else{
      postVinculaCategoria(item.id,userState.donoEmpresa)
      .then(response => {
        Alert.alert("Vinculado com sucesso!")
        return setTiposCategoriasSelected([...tiposCategoriasSelected, item.id]);
      })
      .catch(error => {
        Alert.alert("Tivemos um problema ao desvincular funcionário", error.data.mensagem)
      })
    }
  }
 
  
  return (
    <Container>
      <AreaHeader>
        <AreaMensagemNome>
          <TextoNome numberOfLines={1}>Categorias</TextoNome>
          <TextoMensagem>Selecione as categorias que sua empresa se encaixa.</TextoMensagem>
        </AreaMensagemNome>
      </AreaHeader>
      <ListaCategorias
      data={categorias}
      contentContainerStyle={{alignItems: 'center'}}
      renderItem={({item, index}) => (
        <CardCategoriaSelect data={item} selected={tiposCategoriasSelected.includes(item.id)} onPress={() => {selectItem(item)}}/>
      )}
      />
    </Container>
  );
}