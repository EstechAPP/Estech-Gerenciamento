export interface IServico{
    id: number;
    descricao: string;
    preco: number;
    tempomedio: string;
    img_base64?: string;
    empresa_id: number;
}


export interface IServicoData{
    status: boolean;
    resultado: IServico;
    mensagem: string;
}