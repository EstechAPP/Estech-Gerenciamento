import React from 'react';
import { ICategorias } from '../../types/categorias';
import { IUser } from '../../types/user';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeCategoria,
 } from './styles';

export function CardCategoriaSelect({data, selected, onPress} : {data : ICategorias, selected: boolean, onPress: () => void}){
return (
   <Container onPress={onPress} selected={selected} >
        <FotoProfissional source={data.img_base64 ? {uri: data.img_base64} : require('../../../assets/fotobarbearia.png')}  />
        <AreaNomeCargo>
            <NomeCategoria selected={selected}>{data.descricao}</NomeCategoria>
        </AreaNomeCargo>
   </Container>
  );
}