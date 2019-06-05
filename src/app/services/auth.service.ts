import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: Usuario){
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  register(user: Usuario){
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  getAuth(){
    return this.afa.auth;
  }

  logout(){
    return this.afa.auth.signOut();
  }
}
