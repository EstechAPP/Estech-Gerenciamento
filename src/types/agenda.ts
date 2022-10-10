import { IEmpresa } from "./empresa";
import { IServico } from "./servico";
import { IUser } from "./user";

export interface IAgendamento{
    id: number;
    dataAgendamento: Date;
    tempoeMedioServico: string;
    feedback?: boolean;
    confirmado?: boolean;
    servicoFinalizado: boolean;
    canceladorPor?: number;
    cliente_id: number;
    funcionario_id: number;
    empresa_id: number;
    servicos_id: number;
    logoEmpresa?: string | undefined;
    nomeFantasiaEmpresa: string;
    nomeServico: string;
    valorServico: number;
}

export interface IDataAgendamento{
    status: boolean;
    resultado: IAgendamento[];
    mensagem: string;
}

export interface IConfirmaAgendamento{
    dadosEmpresa: IEmpresa;
    profissionalSelected: IUser;
    servico: IServico;
    dataAgendamento: string;
}
