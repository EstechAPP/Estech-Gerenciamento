import { AxiosResponse } from "axios"

export interface ICategorias{
    id: number,
    descricao: string,
    img_base64: string
}

export interface ICategoriasData{
    status: boolean,
    resultado: ICategorias[],
    mensagem: string
}

// export interface ICategoriasResponse extends AxiosResponse{
//     data: ICategoriasData
// }
