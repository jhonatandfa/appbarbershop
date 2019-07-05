import { Injectable } from '@angular/core';
import { Barbearia } from '../entities/barbearia';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  constructor(private bd:AngularFireDatabase) { }

  save(barbearia: Barbearia, key:string){
    return this.bd.list("barbearias/"+key).push(barbearia);
  }


  getAll() {
    return this.bd.list("barbearias").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  get(key:string){
    return this.bd.object<Barbearia>("barbearias/"+key).valueChanges()
  }
}
