import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barbearia } from 'src/app/entities/barbearia';
import { BarbeariaService } from 'src/app/services/barbearia.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/entities/usuario';

@Component({
  selector: 'app-editar-barbearia',
  templateUrl: './editar-barbearia.page.html',
  styleUrls: ['./editar-barbearia.page.scss'],
})
export class EditarBarbeariaPage implements OnInit {

  public barbearia:Barbearia = new Barbearia();
  key:any;
  public user:Usuario = new Usuario();
  constructor(private route:Router, 
    public barbeariaService:BarbeariaService,
    public AuthService: AngularFireAuth,
    private userService:UsersService) {

      this.AuthService.user.subscribe(
        res=>{
          this.key = res.uid;
         this.barbeariaService.get(this.key).subscribe(
           u => this.barbearia = u
         )
        }  
        )
     }

  ngOnInit() {
  }

  goAddServico(){
    this.route.navigateByUrl('/add-service');
  }

  goBack(){ //ir para home
    this.route.navigateByUrl('/home');
  }
  salvarAlteracoes(){
    this.barbeariaService.utpate(this.barbearia, this.key);
  }
}
