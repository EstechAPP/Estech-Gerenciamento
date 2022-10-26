export interface IInfoHomeFuncionario {
    servicosRealizados: number;
    aguardandoConfirmacao: number;
    mediaEmpresa: number;
    faturamentoDia: string;
}

export interface IDataInfoHomeFuncionario {
    status: boolean;
    resultado: IInfoHomeFuncionario;
    mensagem: string;

}