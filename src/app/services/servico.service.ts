import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Servico } from '../entities/servico';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private bd:AngularFireDatabase) {
  }
      save(servico: Servico){
        return this.bd.list("servicos").push(servico);
      }

      getAll() {
        return this.bd.list("servicos").snapshotChanges()
          .pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          )
      }
}
