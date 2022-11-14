import { AxiosResponse } from "axios";
import { IEmpresa, IEmpresaCad, IEmpresaCadData, IEmpresaData } from "../types/empresa";
import { API } from "./api";


export async function getDadosEmpresa(idEmpresa: Number): Promise<AxiosResponse<IEmpresaData>>{
    return await API.get<IEmpresaData>(`/api/empresa?idEmpresa=${idEmpresa}`)
}

export async function cadastrarEmpresa(objEmpresa: IEmpresaCad): Promise<AxiosResponse<IEmpresaCadData>>{
    return await API.post<IEmpresaCadData>('/api/Empresa', {
        id: 0,
        razaosocial: objEmpresa.razaosocial,
        nomefantasia: objEmpresa.nomefantasia,
        cpfcnpj: objEmpresa.cpfcnpj,
        celular: objEmpresa.celular,
        logradouro: objEmpresa.logradouro,
        numero: objEmpresa.numero,
        bairro: objEmpresa.bairro,
        cidade: objEmpresa.cidade,
        uf: objEmpresa.uf,
        cep: objEmpresa.cep,
        emailDono: objEmpresa.emailDono,
        imgLogo: "",
        imgCapa: "",
        horasFuncionamentoInicio: objEmpresa.horasFuncionamentoInicio,
        horasFuncionamentoFim: objEmpresa.horasFuncionamentoFim
    })
}

export async function alterarLogoTipoEmpresa(idEmpresa: Number, dataURIFoto: string): Promise<AxiosResponse<IEmpresaData>>{
    return await API.post<IEmpresaData>('/api/Empresa/alteraLogotipoEmpresa',{
        idEmpresa,
        dataURIFoto
    })
}

export async function alterarCapaEmpresa(idEmpresa: Number, dataURIFoto: string): Promise<AxiosResponse<IEmpresaData>>{
    return await API.post<IEmpresaData>('/api/Empresa/alteraCapaEmpresa',{
        idEmpresa,
        dataURIFoto
    })
}