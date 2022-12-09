import { AxiosResponse } from "axios";
import { IUser, IUserData } from "../types/user";
import { API } from "./api";

export async function getFuncionariosEmpresa(idEmpresa: number): Promise<AxiosResponse<IUserData>>{
    return await API.get<IUserData>(`api/Empresa/buscaFuncionariosEmpresa?idEmpresa=${idEmpresa}`)
}

export async function postVinculaDono(emailDono: string, idEmpresa: number): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/Empresa/vinculaDonoEmpresa',{
        emailDono,
        idEmpresa
    })
}

export async function postDesviculaDono(emailDono: string, idEmpresa: number): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/Empresa/desvinculaDonoEmpresa',{
        emailDono,
        idEmpresa
    })
}

export async function postDesvinculaFuncionario(emailFuncionario: string, idDonoVinculador: number): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/Empresa/desvincularfuncionarioempresa',{
        emailFuncionario,
        idDonoVinculador
    })
}

export async function postVinculaFuncionario(emailFuncionario: string, idDonoVinculador: number): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/Empresa/vinculafuncionarioempresa',{
        emailFuncionario,
        idDonoVinculador
    })
}