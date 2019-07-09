import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private bd:AngularFireDatabase) { }

  save(user: Usuario, key:string){
    return this.bd.object("usuarios/"+key).set(user);
  }

  get(key:string){
    return this.bd.object<Usuario>("usuarios/"+key).valueChanges()
  }

  utpate(user: Usuario, key:string){
    this.bd.object<Usuario>("usuarios/"+key).update(user);
  }

}
