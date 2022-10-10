
import { AxiosResponse } from "axios";
import { IUserLogin} from "../types/user";
import {API} from "./api";


export async function Login(email: string, senha: string): Promise<AxiosResponse<IUserLogin>>{
    return await API.post<IUserLogin>('api/seguranca',{
        email,
        senha
    })
}