import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private db: AngularFireDatabase,
    private afs: AngularFirestore) { }

  getAll() {
    return this.db.list("agendamentos").snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
  }

  pegarTodos(key) {
    const size$ = new Subject<string>();
    const queryObservable = size$.pipe(
      switchMap(size =>
        this.db.list('/agendamentos', ref => ref.orderByChild('idBarbearia').equalTo(size)).valueChanges()
      )
    );
    queryObservable.subscribe(queriedItems => {
      console.log(queriedItems);  
    });

    return size$.next(key);
  }
}
