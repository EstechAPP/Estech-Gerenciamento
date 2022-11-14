import { AxiosResponse } from "axios";
import { IDataAgendamento } from "../types/agenda";
import { IAgendaServicoUsuarioData } from "../types/AgendaServicoUsuario";
import { IDataInfoHomeFuncionario } from "../types/infoHomeFuncionario";
import { API } from "./api";

export async function getAgendamentosFuncionarios(idFuncionario: Number): Promise<AxiosResponse<IAgendaServicoUsuarioData>>{
    return await API.get<IAgendaServicoUsuarioData>(`api/Agenda/getAgendamentosFuncionario?idFuncionario=${idFuncionario}`)
}

export async function getProximaClienteFuncionario(idFuncionario: Number): Promise<AxiosResponse<IAgendaServicoUsuarioData>>{
    return await API.get<IAgendaServicoUsuarioData>(`api/Agenda/getProximoClienteFuncionario?idFuncionario=${idFuncionario}`)
}

export async function getPendentesFuncionario(idFuncionario: Number): Promise<AxiosResponse<IAgendaServicoUsuarioData>>{
    return await API.get<IAgendaServicoUsuarioData>(`api/Agenda/getPendentesFuncionario?idFuncionario=${idFuncionario}`)
}

export async function getServicosRealizadosHoje(idFuncionario: Number): Promise<AxiosResponse<IAgendaServicoUsuarioData>>{
    return await API.get<IAgendaServicoUsuarioData>(`api/Agenda/getServicosRealizadosHoje?idFuncionario=${idFuncionario}`)
}

export async function getServicosAguardandoFinalizacao(idFuncionario: Number): Promise<AxiosResponse<IAgendaServicoUsuarioData>>{
    return await API.get<IAgendaServicoUsuarioData>(`api/Agenda/getPendentesFinalizacaoFuncionario?idFuncionario=${idFuncionario}`)
}

export async function getInfoHomeFuncionario(idFuncionario: Number): Promise<AxiosResponse<IDataInfoHomeFuncionario>>{
    return await API.get<IDataInfoHomeFuncionario>(`api/Agenda/getInfoHomeFuncionario?idFuncionario=${idFuncionario}`)
}

export async function postConfirmaRecusaAgendamento(idAgendamento: Number, statusAgendamento: boolean): Promise<AxiosResponse<IDataAgendamento>>{
    return await API.post<IDataAgendamento>('/api/Agenda/confirmarecusaagendamento', {
        idAgendamento,
        statusAgendamento
    })
}

export async function postFinalizarAgendamento(idAgendamento: Number, statusAgendamento: boolean): Promise<AxiosResponse<IDataAgendamento>>{
    return await API.post<IDataAgendamento>('/api/Agenda/finalizaAgendamento', {
        idAgendamento,
        statusAgendamento
    })
}

export async function postCancelarAgendamento(idAgendamento: Number, canceladorPor: Number): Promise<AxiosResponse<IDataAgendamento>>{
    console.log(idAgendamento, canceladorPor)
    return await API.post<IDataAgendamento>('/api/Agenda/cancelarAgendamento', {
        idAgendamento,
        canceladorPor
    })
}