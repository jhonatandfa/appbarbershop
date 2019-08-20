import { Servico } from './servico';


export class Agendamento {
    key:string;
    momento:number;
    dataDoAgendamento:string;
    horaDoAgendamento:string;
    idCliente:string;
    idBarbearia:string;
    servico:Servico[] = [];
    status:boolean = false;
}
