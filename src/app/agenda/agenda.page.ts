import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AgendaService } from '../services/agenda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  public espera: any = [];
  public finalizado: any = [];
  public key: any;
  public agendamentos$: any;

  constructor(public AuthService: AngularFireAuth,
    private agendaService: AgendaService) { }

  ngOnInit() {
    this.AuthService.user.subscribe(
      res => {
        console.log(res.uid);
        
         this.agendaService.pegarTodos(res.uid).subscribe(
          data => {
            this.espera = [];
            this.finalizado = [];
            data.forEach((value, index) => {
              console.log(value['status'])
              value['status'] === false ? this.espera.push(value) : this.finalizado.push(value)
            })
            
            }
        );
      }
    )
  }

  finalizar(key){
    this.agendaService.finalizar(key)
  }

}
