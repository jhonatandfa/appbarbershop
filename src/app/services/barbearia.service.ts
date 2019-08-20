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
    return this.bd.object("barbearias/"+key).set(barbearia);
  }


  getAll() {
    return this.bd.list("barbearias").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  utpate(user: Barbearia, key:string){
    this.bd.object<Barbearia>("barbearias/"+key).update(user);
  }

  get(key:string){
    return this.bd.object<Barbearia>("barbearias/"+key).valueChanges()
  }

  openAndClosed(key, status:boolean){
    
      this.bd.object('barbearias/'+key).update({status})
    
  }
}
