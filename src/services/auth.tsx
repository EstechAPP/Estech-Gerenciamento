
import { AxiosResponse } from "axios";
import { IUser, IUserLogin} from "../types/user";
import {API} from "./api";


export async function Login(email: string, senha: string): Promise<AxiosResponse<IUserLogin>>{
    return await API.post<IUserLogin>('api/seguranca',{
        email,
        senha
    })
}

export async function AlterarFotoUsuario(idUsuario: number, dataURIFoto: string): Promise<AxiosResponse<IUser>>{
    return await API.post<IUser>('api/Usuario/alterarFotousuario',{
        idUsuario,
        dataURIFoto
    })
}