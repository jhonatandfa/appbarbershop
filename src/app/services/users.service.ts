import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private bd:AngularFireDatabase) { }

  save(user: Usuario){
    return this.bd.list("usuarios").push(user);
  }
}
