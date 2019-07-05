import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Usuario } from '../entities/usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  public confirmaSenha:string = "";
  public user:Usuario = null;
  public usuario$:any;
  
  key:any;
  constructor(private userService:UsersService,
    public AuthService: AngularFireAuth) { 
    }

  ngOnInit() {
    this.user = new Usuario();
  }

  salvarAlteracoes(){
    this.userService.utpate(this.user);
  }
}
