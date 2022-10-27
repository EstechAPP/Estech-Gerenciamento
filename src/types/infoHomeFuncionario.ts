export interface IInfoHomeFuncionario {
    servicosRealizados: number;
    aguardandoConfirmacao: number;
    mediaEmpresa: number;
    faturamentoDia: string;
    mediaFuncionario: number;
}

export interface IDataInfoHomeFuncionario {
    status: boolean;
    resultado: IInfoHomeFuncionario;
    mensagem: string;

}