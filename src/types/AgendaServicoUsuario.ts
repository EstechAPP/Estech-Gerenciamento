export interface IAgendaServicoUsuario{
    nomeServico: string;
    tempoMedioServico: string;
    celularCliente: string;
    nomeFuncionario: string;
    celularFuncionario: string;
    fotoFuncionarioBase64: string;
    nomeCliente: string;
    fotoClienteBase64: string;
    id: Number;
    dataAgendamento: string; 
    tempoeMedioServico: string;
    feedback: Number;
    confirmado: boolean;
    servicoFinalizado: boolean;
    canceladoPor: Number;
    cliente_id: Number;
    funcionario_id: Number;
    empresa_id: Number;
    servicos_id: Number;
}

export interface IAgendaServicoUsuarioData{
    status: boolean;
    resultado: IAgendaServicoUsuario[];
    mensagem: string;
}