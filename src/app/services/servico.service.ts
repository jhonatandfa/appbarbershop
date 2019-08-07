import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Servico } from '../entities/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private bd:AngularFireDatabase) {
  }
      save(servico: Servico){
        return this.bd.list("servicos/").push(servico);
      }
}
