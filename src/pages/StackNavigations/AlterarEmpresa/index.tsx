import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components';
import { ButtonPerfil } from '../../../components/ButtonPerfil';
import AuthContext from '../../../context/user';
import { alterarCapaEmpresa, alterarLogoTipoEmpresa, getDadosEmpresa } from '../../../services/empresa';
import { IEmpresa } from '../../../types/empresa';
import * as ImagePicker from 'react-native-image-picker';

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
import Spinner from 'react-native-loading-spinner-overlay';
import { SpinnerLoading } from '../../../components/SpinnerLoading';

export function AlterarEmpresa(){
    const theme = useTheme();
    const navigation = useNavigation();
    const {userState} = useContext(AuthContext);
    const [empresa, setEmpresa] = useState<IEmpresa>();
    const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
        setRefreshing(true);
        getDadosEmpresa(userState.donoEmpresa)
        .then(response => {
          setEmpresa(response.data.resultado)
          setRefreshing(false);
        })
        .catch(err => {
          setRefreshing(false);
          Alert.alert("Tivemos um problema em processar sua requisição", err.data.mensagem)
        })
    }, [])


    function SelecionaImagem(tipoImagem: string) {
        Alert.alert(
          'Upload de imagens',
          'Selecione as fotos que serão juntadas ao atendimento',
          [
            {
              text: 'Galeria',
              onPress: () => VerificaPermissao('Galeria', tipoImagem),
            },
            {
              text: 'Câmera',
              onPress: () => VerificaPermissao('Camera', tipoImagem),
            },
            {
              text: 'Cancelar',
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {},
          },
        );
      }
    
    function VerificaPermissao(selectedType: string, tipoImagem: string) {
      if (Platform.OS == 'ios') {
        check(PERMISSIONS.IOS.CAMERA || PERMISSIONS.IOS.PHOTO_LIBRARY)
          .then(result => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                Alert.alert('Câmera não está disponível em seu dispositivo.');
                break;
              case RESULTS.DENIED:
                request(PERMISSIONS.IOS.CAMERA).then(response => {
                  request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(res => {
                    VerificaPermissao(selectedType, tipoImagem);
                  });
                });
                break;
              case RESULTS.BLOCKED:
                Linking.openSettings();
                break;
              case RESULTS.GRANTED:
                TipoUpload(selectedType, tipoImagem);
                break;
            }
          })
          .catch(error => {
            console.error('ERRO:' + error);
          });
      } else if (Platform.OS == 'android') {
        check(
          PERMISSIONS.ANDROID.CAMERA ||
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        )
          .then(result => {
            switch (result) {
              case RESULTS.UNAVAILABLE:
                Alert.alert('Câmera não está disponível em seu dispositivo.');
                break;
              case RESULTS.DENIED:
                request(PERMISSIONS.ANDROID.CAMERA).then(response => {
                  request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(
                    res => {
                      VerificaPermissao(selectedType, tipoImagem);
                    },
                  );
                });
                break;
              case RESULTS.BLOCKED:
                Linking.openSettings();
                break;
              case RESULTS.GRANTED:
                TipoUpload(selectedType, tipoImagem);
                break;
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  
    async function TipoUpload(selectedType: string, tipoImagem: string) {
      const CameraOptions: ImagePicker.CameraOptions = {
        includeBase64: true,
        mediaType: 'photo',
        quality: 0.7,
      };
      const GalleryOptions: ImagePicker.ImageLibraryOptions = {
        includeBase64: true,
        mediaType: 'photo',
        selectionLimit: 1,
        quality: 0.7,
      };
      if (selectedType === 'Camera') {
        const response = await ImagePicker.launchCamera(CameraOptions);
        if (response?.assets) {
          response.assets.forEach(element => {
            const dataURI = `data:${element.type};base64,${element.base64}`;
            if(tipoImagem == 'Logo'){
              alterarLogoTipoEmpresa(userState.donoEmpresa, dataURI)
              .then(response => {
                  setEmpresa(prevState => ({ ...prevState, logoEmp: dataURI }));
              })
              .catch(err => {
                  Alert.alert('Erro alterar foto', err.data.mensagem)
              })
            }else{
              alterarCapaEmpresa(userState.donoEmpresa, dataURI)
              .then(response => {
                  setEmpresa(prevState => ({ ...prevState, capaEmp: dataURI }));
              })
              .catch(err => {
                  Alert.alert('Erro alterar foto', err.data.mensagem)
              })
            }
          });
        }
        if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera indisponível para utilização.');
        }
      } else {
        const response = await ImagePicker.launchImageLibrary(GalleryOptions);
        if (response.assets) {
          response.assets.forEach(element => {
            const dataURI = `data:${element.type};base64,${element.base64}`;
            if(tipoImagem == 'Logo'){
              alterarLogoTipoEmpresa(userState.donoEmpresa, dataURI)
              .then(response => {
                  setEmpresa(prevState => ({ ...prevState, logoEmp: dataURI }));
              })
              .catch(err => {
                  Alert.alert('Erro alterar foto', err.data.mensagem)
              })
            }else{
              alterarCapaEmpresa(userState.donoEmpresa, dataURI)
              .then(response => {
                  setEmpresa(prevState => ({ ...prevState, capaEmp: dataURI }));
              })
              .catch(err => {
                  Alert.alert('Erro alterar foto', err.data.mensagem)
              })
            }
          });
        }
      }
    }



return (
   <Container>
    <Spinner visible={refreshing} customIndicator={<SpinnerLoading titulo='Carregando dados da empresa...'/>} />
        <Header>
            <AreaLogoCapa>
                <AreaFoto>
                    <TituloImagem>Logotipo</TituloImagem>
                    <ImagemPreview source={empresa?.logoEmp ? {uri: empresa.logoEmp} : require('../../../../assets/noimageavailable.png')}/>
                    <TouchUpload onPress={() => SelecionaImagem('Logo')}>
                        <Icon name="picture" size={24} color={theme.colors.white} />
                    </TouchUpload>
                </AreaFoto>
                <AreaFoto>
                    <TituloImagem>Capa</TituloImagem>
                    <ImagemPreview source={empresa?.capaEmp ? {uri: empresa.capaEmp} : require('../../../../assets/noimageavailable.png')}/>
                    <TouchUpload onPress={() => SelecionaImagem('Capa')}>
                        <Icon name="picture" size={24} color={theme.colors.white} />
                    </TouchUpload>
                </AreaFoto>
            </AreaLogoCapa>
            <InfoEmpresa>
                <TituloEmpresa>{empresa?.nomefantasia}</TituloEmpresa>
                <AreaDataCadastro>
                    <DataCadastro>Razão Social: </DataCadastro>
                    <ResultCadastro>{empresa?.razaosocial}</ResultCadastro>
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