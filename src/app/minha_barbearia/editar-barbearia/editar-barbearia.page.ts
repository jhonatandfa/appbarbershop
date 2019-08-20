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
  public horas = [
    '00:00', '00:30','01:00', '11:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00',
    '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',
    '23:30'
  ];
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

  
  getHoraA(e){
    this.barbearia.horarioAbert = e.detail.value;
    console.log(this.barbearia.horarioAbert);
  }

  getHoraF(e){
    this.barbearia.horarioFecha = e.detail.value;
    console.log(this.barbearia.horarioFecha);
  }

  goAddServico(){
    this.route.navigateByUrl('/add-service');
  }

  goBack(){ //ir para home
    this.route.navigateByUrl('/home');
  }
  salvarAlteracoes(){
    this.barbeariaService.utpate(this.barbearia, this.key);
    this.route.navigate(['/home'])
  }
}
