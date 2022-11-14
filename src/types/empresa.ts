export interface IEmpresa{
    id: number;
    idFormaPagamento: number;
    razaosocial: string;
    nomefantasia: string;
    cpfcnpj: string;
    celular: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    imgLogo_fisico: string;
    imgCapa_fisico: string;
    mediaFeedback: Number;
    latitude: string;
    longitude: string;
    horasFuncionamentoInicio: string;
    horasFuncionamentoFim: string;
    empresaAtiva: Boolean
}


export interface IEmpresaCad{
    id: number;
    razaosocial: string;
    nomefantasia: string;
    cpfcnpj: string;
    celular: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    emailDono: string;
    imgLogo: string;
    imgCapa: string;
    horasFuncionamentoInicio: string;
    horasFuncionamentoFim: string;
}

export interface IEmpresaData{
    status: boolean;
    resultado: IEmpresa;
    mensagem: string;
}

export interface IEmpresaCadData{
    status: boolean;
    resultado: IEmpresaCad;
    mensagem: string;
}

export interface IEmpresaCard{
    dados: IEmpresa;
}