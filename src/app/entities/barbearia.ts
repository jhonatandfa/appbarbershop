import { Servico } from './servico';

export class Barbearia {
    key:string;
    nome:string;
    nomeBarber:string;
    horarioAbert:string;
    horarioFecha:string;
    telefone:string;
    endereco:string;
    status:boolean = false;
    lng:string;
    lat:string;
    servico: Servico[];
}
