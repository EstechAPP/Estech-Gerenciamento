import React from 'react';
import {IUser} from '../../types/user';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  FotoProfissional,
  AreaNomeCargo,
  NomeProfissional,
  CargoProfissional,
  AreaProfissional,
  AreaButtons,
  TouchButton,
} from './styles';
import theme from '../../styles/theme';

export function CardProfissional({data, index}: {data: IUser; index: number}) {


    function vinculaDono(){

    }

    function desvincularrFuncionario(){

    }

  return (
    <Container>
      <AreaProfissional index={index}>
        <FotoProfissional
          source={
            data.foto_base64
              ? {uri: data.foto_base64}
              : require('../../../assets/fotobarbearia.png')
          }
        />
        <AreaNomeCargo>
          <NomeProfissional>
            {data.nome} {data.sobrenome}
          </NomeProfissional>
          {data.donoEmpresa != 0 && (
            <CargoProfissional>*Dono*</CargoProfissional>
          )}
        </AreaNomeCargo>
      </AreaProfissional>
      <AreaButtons>
        <TouchButton backgroundColor={theme.colors.select_tab} onPress={vinculaDono}>
            <Icon name='hail' size={20}/>
        </TouchButton>
        <TouchButton>
            <Icon name='delete-outline' size={20} onPress={desvincularrFuncionario} />
        </TouchButton>
      </AreaButtons>
    </Container>
  );
}
