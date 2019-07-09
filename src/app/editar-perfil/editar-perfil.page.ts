import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Usuario } from '../entities/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { userInfo } from 'os';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  public confirmaSenha:string = "";
  //public user:Usuario = null;
  public user:Usuario = new Usuario();
  
  key:any;
  constructor(private userService:UsersService,
    public AuthService: AngularFireAuth) { 
    }

  ngOnInit() {
    this.AuthService.user.subscribe(
      res=>{
        this.key = res.uid;
       this.userService.get(res.uid).subscribe(
         u => this.user = u
       )
      }  
      )
  }

  salvarAlteracoes(){
    this.userService.utpate(this.user, this.key);
  }
}
