import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  public espera:any = [];
  public finalizado:any = [];
  public key: any;
  public agendamentos$: any;
  constructor(public AuthService: AngularFireAuth,
    private agendaService: AgendaService) { }

  ngOnInit() {
    this.AuthService.user.subscribe(
      res => {
        this.key = res.uid;
      }
    )
    this.agendamentos$ = this.agendaService.getAll();
    console.log(this.agendamentos$)
  }

}
