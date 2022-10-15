import { AxiosResponse } from "axios";
import { IUser, IUserData } from "../types/user";
import { API } from "./api";

export async function getFuncionariosEmpresa(idEmpresa: number): Promise<AxiosResponse<IUserData>>{
    return await API.get<IUserData>(`api/Empresa/buscaFuncionariosEmpresa?idEmpresa=${idEmpresa}`)
}

export async function postVinculaDono(emailDono: string, idEmpresa: number): Promise<AxiosResponse<IUserData>>{
    return await API.post<IUserData>('api/seguranca',{
        emailDono,
        idEmpresa
    })
}