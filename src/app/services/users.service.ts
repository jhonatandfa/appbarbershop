import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private bd:AngularFireDatabase) { }

  save(user: Usuario, key:string){
    return this.bd.list("usuarios/"+key).push(user);
  }

  get(key:string){
    return this.bd.object<Usuario>("usuarios/"+key).valueChanges()
  }

  get1(user: Usuario){
    return this.bd.list('/usuarios/', ref => ref.orderByChild('nome').equalTo(user.email));
  }
}
