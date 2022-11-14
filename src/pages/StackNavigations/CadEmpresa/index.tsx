import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { CustomInput, CustomMaskInput } from '../../../components/CustomInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { APIViaCEP } from '../../../services/api';

import { Masks } from 'react-native-mask-input';

import {
    Container,
    ViewTitulo,
    TextoTitulo,
    AreaLogin,
    ViewCampo,
    TextoCampo,
    ViewButton,
} from './styles';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import moment from 'moment';
import SwitchSelector from 'react-native-switch-selector';
import theme from '../../../styles/theme';
import { IEmpresaCad } from '../../../types/empresa';
import { cadastrarEmpresa } from '../../../services/empresa';
import { ActivityIndicator } from 'react-native';

export function CadEmpresa(){
    const navigation = useNavigation();
    const [formaCad, setFormaCad] = useState('CPF');
    const [visible, setVisible] = useState(false);
    const [dialogEmailDono, setDialogEmailDono] = useState(false);

    const tempoMedioMask = [/\d/, /\d/,":",/\d/, /\d/];

    //Campos

    const [razaoSocial, setRazaoSocial] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [CPF, setCPF] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [celular, setcelular] = useState('')
    const [logradouro, setlogradouro] = useState('')
    const [numero, setnumero] = useState('')
    const [bairro, setbairro] = useState('')
    const [cidade, setcidade] = useState('')
    const [uf, setuf] = useState('')
    const [cep, setcep] = useState('')
    const [emailDono, setemailDono] = useState('')
    const [hFuncInicio, sethFuncInicio] = useState('')
    const [hFuncFim, sethFuncFim] = useState('')


    const options = [
        { label: "CPF", value: "CPF" },
        { label: "CNPJ", value: "CNPJ" },
      ];

    async function buscaUFCidade(){
        setcidade('Buscando dados...')
        setuf('Buscando dados...')
        APIViaCEP.get(`${cep}/json/`)
        .then(response => {
            if(response.data.erro){
                Alert.alert('CEP Informado inválido, verifique e tente novamente.')
                setcep('')
                setuf('')
                setcidade('')
                return
            }
            setcidade(response.data.localidade)
            setuf(response.data.uf)
            
        })
        .catch(err => {
            setcep('')
            setuf('')
            setcidade('')
            Alert.alert('Tivemos um problema em buscar seu CEP, tente novamente mais tarde.')
        })
    }

    function dialgoEmail(){
        if(!dialogEmailDono){
            Alert.alert('Atenção!', "Necessário fornecer email de um usuário existente já na plataforma Estech, pois o vinculo de dono será efetuada em sua conta do outro aplicativo.",
            [
                {
                    text: 'OK',
                    onPress: () => setDialogEmailDono(true),
                    style: 'default'
                }
            ])
        }
    }

    async function enviaCadastro(){
        setVisible(true);
        const objEmp : IEmpresaCad = {
            id: 0,
            razaosocial: formaCad == "CNPJ" ? razaoSocial : "",
            nomefantasia: nomeFantasia,
            cpfcnpj: formaCad == "CNPJ" ? CNPJ : CPF,
            celular,
            logradouro,
            numero,
            bairro,
            cidade,
            uf,
            cep,
            emailDono,
            imgLogo: "",
            imgCapa: "",
            horasFuncionamentoInicio: hFuncInicio,
            horasFuncionamentoFim: hFuncFim
        }

        cadastrarEmpresa(objEmp)
        .then(resp => {
            if(resp.data.status){
                Alert.alert('Cadastrado com sucesso!', resp.data.mensagem)
                navigation.goBack();
                setVisible(false);
            }
            else{
                Alert.alert("Erro ao efetuar cadastro", resp.data.mensagem);
                setVisible(false);
            }
        })
        .catch(err => {
            console.log(err.response)
            setVisible(false);
        })
    }



return (
    <Container>
    {/* <Spinner visible={visible} customIndicator={(
        <SpinnerLoading titulo='Realizando cadastro...' />
    )}  /> */}
    <ViewTitulo>
        <TextoTitulo>Registrar-se</TextoTitulo>
    </ViewTitulo>
    <AreaLogin>
        <TextoCampo style={{textAlign: 'center', marginBottom: 10}}>Forma de cadastro</TextoCampo>
        <SwitchSelector options={options} initial={0}  buttonColor={theme.colors.select_tab} onPress={value => setFormaCad(value)} style={{width: '82%', marginBottom: 20}} />
        {formaCad == "CNPJ" ? (
       <>
       <ViewCampo>
            <TextoCampo>Razão Social</TextoCampo>
            <CustomInput placeholder='Razão Social' value={razaoSocial} onChangeText={value => setRazaoSocial(value)}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Nome Fantasia</TextoCampo>
            <CustomInput placeholder='Nome Fantasia' value={nomeFantasia} onChangeText={value => setNomeFantasia(value)}   />
        </ViewCampo>
       </>
        ) : (
        <ViewCampo>
            <TextoCampo>Nome do Negócio</TextoCampo>
            <CustomInput placeholder='Ex: Cabeleireira Leila'  value={nomeFantasia} onChangeText={value => setNomeFantasia(value)}   />
        </ViewCampo>
        )}
        {formaCad == "CPF" ? (
            <ViewCampo>
                <TextoCampo>CPF</TextoCampo>
                <CustomMaskInput mask={Masks.BRL_CPF} placeholder='ex: 000.000.000-00' maxLength={14}  value={CPF} onChangeText={value => setCPF(value)}   />
            </ViewCampo>
        ) : (
            <ViewCampo>
                <TextoCampo>CNPJ</TextoCampo>
                <CustomMaskInput mask={Masks.BRL_CNPJ} placeholder='ex: 00.000.000/0000-00' maxLength={18}   value={CNPJ} onChangeText={value => setCNPJ(value)}   />
            </ViewCampo>
        )}
        <ViewCampo>
            <TextoCampo>Celular</TextoCampo>
            <CustomMaskInput mask={Masks.BRL_PHONE} maxLength={15} placeholder='ex: (99) 99999-9999' value={celular} onChangeText={value => setcelular(value)}   />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>CEP</TextoCampo>
            <CustomMaskInput mask={Masks.ZIP_CODE} maxLength={9} placeholder='ex: 99999-999' onEndEditing={buscaUFCidade}  value={cep} onChangeText={value => setcep(value)}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>UF</TextoCampo>
            <CustomInput placeholder='ex: SP'  value={uf} onChangeText={value => setuf(value)}   editable={false} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Cidade</TextoCampo>
            <CustomInput placeholder='ex: São Paulo'  value={cidade} onChangeText={value => setcidade(value)}   editable={false}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Logradouro</TextoCampo>
            <CustomInput placeholder='ex: SP'  value={logradouro} onChangeText={value => setlogradouro(value)}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Número</TextoCampo>
            <CustomInput placeholder='ex: 000' value={numero} onChangeText={value => setnumero(value)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Bairro</TextoCampo>
            <CustomInput placeholder='ex: Centro'  value={bairro} onChangeText={value => setbairro(value)} />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Horário Funcionamento Início</TextoCampo>
            <CustomMaskInput mask={tempoMedioMask} placeholder='ex: 08:00' maxLength={5} value={hFuncInicio} onChangeText={value => sethFuncInicio(value)}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Horário Funcionamento Fim</TextoCampo>
            <CustomMaskInput mask={tempoMedioMask} placeholder='ex: 21:00' maxLength={5} value={hFuncFim} onChangeText={value => sethFuncFim(value)}  />
        </ViewCampo>
        <ViewCampo>
            <TextoCampo>Email do Dono</TextoCampo>
            <CustomInput placeholder='ex: SP'  value={emailDono} onChangeText={value => setemailDono(value)} onPressIn={dialgoEmail} />
        </ViewCampo>
        {visible ? 
        <ActivityIndicator/>
        : (
        <ViewButton>
            <PrimaryButton titulo='Cadastrar' onPress={enviaCadastro}/>
        </ViewButton>
        )}
    </AreaLogin>
   </Container>
  );
}