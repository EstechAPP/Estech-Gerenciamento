import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useContext, useState } from 'react';
import { Alert, Linking, Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'react-native-image-picker';
import { useTheme } from 'styled-components';
import { ButtonPerfil } from '../../../components/ButtonPerfil';
import AuthContext from '../../../context/user';

import {
 Container,
 AreaPerfil,
 AreaFoto,
 FotoUsuario,
 TouchPerfil,
 AreaNomeData,
 AreaNome,
 TextoNome,
 AreaData,
 TextoData,
 ResultData,
 AreaButtons,

} from './styles';
import { AlterarFotoUsuario } from '../../../services/auth';
import { getDadosEmpresa } from '../../../services/empresa';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SpinnerLoading } from '../../../components/SpinnerLoading';


export default function Perfil(){
  const theme = useTheme();
  const navigation = useNavigation();
  const {userState, setUserState, logout} = useContext(AuthContext)
  const [visible, setVisible] = useState(false);

  function dialogTipoUpload(){
    Alert.alert(
      'Alterar foto de perfil',
      'Selecione o meio na qual quer fazer o envio de sua foto.',
      [
        {
          text: 'Galeria',
          onPress: () => VerificaPermissao('Galeria'),
        },
        {
          text: 'Câmera',
          onPress: () => VerificaPermissao('Camera'),
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

  function VerificaPermissao(selectedType?: string) {
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
                  VerificaPermissao(selectedType);
                });
              });
              break;
            case RESULTS.BLOCKED:
              Linking.openSettings();
              break;
            case RESULTS.GRANTED:
              TipoUpload(selectedType);
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
                    VerificaPermissao(selectedType);
                  },
                );
              });
              break;
            case RESULTS.BLOCKED:
              Linking.openSettings();
              break;
            case RESULTS.GRANTED:
              TipoUpload(selectedType);
              break;
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
  async function TipoUpload(selectedType: string) {
    const CameraOptions: ImagePicker.CameraOptions = {
      includeBase64: true,
      mediaType: 'photo',
      quality: 0.7
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
          setVisible(true);
          AlterarFotoUsuario(userState.id, dataURI).then(response => {
            setUserState(prevstate => {
              return {...prevstate, foto_base64: dataURI}
            })
            setVisible(false);
          })
          .catch(err => {
            console.error(err)
            setVisible(false);
          })
        });
      }
    } else {
      const response = await ImagePicker.launchImageLibrary(GalleryOptions);
      if (response.assets) {
        response.assets.forEach(element => {
          const dataURI = `data:${element.type};base64,${element.base64}`;
          setVisible(true);
          AlterarFotoUsuario(userState.id, dataURI).then(response => {
            setUserState(prevstate => {
              return {...prevstate, foto_base64: dataURI}
            })
            setVisible(false);
          })
          .catch(err => {
            console.error(err)
            setVisible(false);
          })
        });
      }
    }
  }

  async function carregaDadosEmpresa(){
    setVisible(true);
    getDadosEmpresa(userState.donoEmpresa)
    .then(response => {
      setVisible(false);
      navigation.navigate("AlterarEmpresa", {empresa: response.data.resultado})
    })
    .catch(err => {
      setVisible(false);
      Alert.alert("Tivemos um problema em processar sua requisição", err.data.mensagem)
    })
  }

  function acessaManual(){
    Linking.openURL("https://1drv.ms/v/s!Aqi2m1WrMRqsg9wxecVqgYIatv5cqg?e=bxtxAC")
  }

return (
   <Container>
    <Spinner visible={visible} customIndicator={<SpinnerLoading titulo='Carregando dados da empresa...'/>} />
    <AreaPerfil>
      <AreaFoto>
      {userState.foto_base64 ? (
        <FotoUsuario source={{uri: userState.foto_base64}} />
      )
    : (
        <FotoUsuario source={require('../../../../assets/no-profile-icon.png')} />
    )}
        <TouchPerfil onPress={dialogTipoUpload}>
          <Icon name='picture' size={24} color={theme.colors.white} />
        </TouchPerfil>
      </AreaFoto>
      <AreaNomeData>
        <AreaNome>
          <TextoNome>{userState.nome} {userState.sobrenome}</TextoNome>
        </AreaNome>
        <AreaData>
          <TextoData>
            Usuário desde 
          </TextoData>
          <ResultData>
             {` ${moment(userState.dataCadastro).format("LL")}`}
          </ResultData>
        </AreaData>
      </AreaNomeData>
    </AreaPerfil>
    <AreaButtons>
      <ButtonPerfil titulo='Sair' iconName='logout' onPress={logout} />
      {userState.donoEmpresa != 0 && (
        <ButtonPerfil titulo='Alterar Empresa' iconName='edit' onPress={carregaDadosEmpresa}/>
      )}
      {userState.donoEmpresa != 0 ? (
          <ButtonPerfil titulo='Manual do Usuário' iconName='live-help' space onPress={acessaManual}/>
        ) : (
          <ButtonPerfil titulo='Manual do Usuário' iconName='live-help' onPress={acessaManual}/>
      )}
    </AreaButtons>
   </Container>
  );
}