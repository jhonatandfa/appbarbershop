import { Injectable } from '@angular/core';
import { Agendamento } from '../entities/agendamento';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private bd:AngularFireDatabase) { }

  
  save(agendamento: Agendamento, key:string){
    return this.bd.list("agendamentos/"+key).push(agendamento);
  }
}
