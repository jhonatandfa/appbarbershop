import { Injectable } from '@angular/core';
import { Barbearia } from '../entities/barbearia';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  constructor(private bd:AngularFireDatabase) { }

  save(barbearia: Barbearia){
    return this.bd.list("barbearias").push(barbearia);
  }
}
