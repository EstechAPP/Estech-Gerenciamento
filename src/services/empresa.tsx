import { AxiosResponse } from "axios";
import { IEmpresaData } from "../types/empresa";
import { API } from "./api";


export async function getDadosEmpresa(idEmpresa: Number): Promise<AxiosResponse<IEmpresaData>>{
    return await API.get<IEmpresaData>(`/api/empresa?idEmpresa=${idEmpresa}`)
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