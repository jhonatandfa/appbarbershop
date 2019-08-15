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
  public espera: any;
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
            console.log(data)
            data.forEach( d => d[0])
            
            //console.log(this.espera[0].status)
            
          }
        );
      }
    )
  }

}
