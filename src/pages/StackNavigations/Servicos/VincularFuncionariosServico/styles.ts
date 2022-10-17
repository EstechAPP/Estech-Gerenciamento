import { FlatList, ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import { IUser } from '../../../../types/user';

export const Container = styled.View`
   flex: 1;
   align-items: center;
`;

export const Formulario = styled.View`

   flex: 1;

`;

export const AreaForm = styled.View`

      align-items: center;
      margin-bottom: 20px;

`;

export const AreaButton = styled.View`

   flex: 1%;

`;


export const ListaFuncionarios = styled(FlatList as new () => FlatList<IUser[]>)`
   flex: 4;
`;

