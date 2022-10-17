import React from 'react';
import { IUser } from '../../types/user';

import {
 Container,
 FotoProfissional,
 AreaNomeCargo,
 NomeProfissional,
 } from './styles';

export function CardProfissionalSelect({data, selected, onPress} : {data : IUser}){
return (
   <Container onPress={onPress} selected={selected} >
        <FotoProfissional source={data.foto_base64 ? {uri: data.foto_base64} : require('../../../assets/fotobarbearia.png')}  />
        <AreaNomeCargo>
            <NomeProfissional selected={selected}>{data.nome} {data.sobrenome}</NomeProfissional>
        </AreaNomeCargo>
   </Container>
  );
}