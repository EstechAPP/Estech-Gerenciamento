import { AxiosResponse } from "axios";
import { ICategoriasData } from "../types/categorias";
import { API } from "./api";


export async function getTiposCategoriasAll(): Promise<AxiosResponse<ICategoriasData>>{
    return await API.get<ICategoriasData>(`api/tiposcategoria`)
}

export async function getCategoriasEmpresa(idEmpresa: Number): Promise<AxiosResponse<ICategoriasData>>{
    return await API.get<ICategoriasData>(`/api/TIPOSCategoria/GetCategoriasDaEmpresa?idEmpresa=${idEmpresa}`)
}


export async function postVinculaCategoria(idCategoria: Number, idEmpresa: Number): Promise<AxiosResponse<ICategoriasData>>{
    return await API.post<ICategoriasData>('/api/TIPOSCategoria/vincularcategoriaempresa',{
        idCategoria,
        idEmpresa
    })
}


export async function postDesvinculaCategoria(idCategoria: Number, idEmpresa: Number): Promise<AxiosResponse<ICategoriasData>>{
    return await API.post<ICategoriasData>('/api/TIPOSCategoria/desvincularcategoriaempresa',{
        idCategoria,
        idEmpresa
    })
}