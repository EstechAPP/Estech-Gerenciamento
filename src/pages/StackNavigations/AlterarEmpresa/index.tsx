import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components';
import { ButtonPerfil } from '../../../components/ButtonPerfil';
import AuthContext from '../../../context/user';


import {
 Container,
 Header,
 AreaLogoCapa,
 AreaFoto,
 TituloImagem,
 ImagemPreview,
 TouchUpload,
 InfoEmpresa,
 TituloEmpresa,
 AreaDataCadastro,
 DataCadastro,
 ResultCadastro,
 AreaButtons,

} from './styles';

export function AlterarEmpresa(){
    const theme = useTheme();
    const navigation = useNavigation();
    const {userState} = useContext(AuthContext);

return ( 
   <Container>
        <Header>
            <AreaLogoCapa>
                <AreaFoto>
                    <TituloImagem>Logotipo</TituloImagem>
                    <ImagemPreview source={{uri: userState.foto_base64}}/>
                    <TouchUpload>
                        <Icon name="picture" size={24} color={theme.colors.white} />
                    </TouchUpload>
                </AreaFoto>
                <AreaFoto>
                    <TituloImagem>Capa</TituloImagem>
                    <ImagemPreview source={{uri: userState.foto_base64}}/>
                    <TouchUpload>
                        <Icon name="picture" size={24} color={theme.colors.white} />
                    </TouchUpload>
                </AreaFoto>
            </AreaLogoCapa>
            <InfoEmpresa>
                <TituloEmpresa>Hugo Barbearia</TituloEmpresa>
                <AreaDataCadastro>
                    <DataCadastro>Empresa cadastrada desde </DataCadastro>
                    <ResultCadastro>29/07/2022</ResultCadastro>
                </AreaDataCadastro>
            </InfoEmpresa>
        </Header>
        <AreaButtons>
            <ButtonPerfil iconName='miscellaneous-services' titulo='Serviços' onPress={() => navigation.navigate('Servicos')}/>
            <ButtonPerfil iconName='person' titulo='Funcionários' onPress={() => navigation.navigate('Funcionarios')}/>
            <ButtonPerfil iconName='category' space titulo='Categorias' onPress={() => navigation.navigate('Categorias')}/>
            <ButtonPerfil iconName='payments' space titulo='Formas de Pagamento' onPress={() => Alert.alert("Em breve!", "Requisito adiado. 😕")}/>
        </AreaButtons>
   </Container>
  );
}