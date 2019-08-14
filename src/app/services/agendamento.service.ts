import { Injectable } from '@angular/core';
import { Agendamento } from '../entities/agendamento';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private bd:AngularFireDatabase) { }

  
  save(agendamento: Agendamento){
    return this.bd.list("agendamentos").push(agendamento);
  }
}
