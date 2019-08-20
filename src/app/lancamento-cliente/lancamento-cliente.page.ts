import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-lancamento-cliente',
  templateUrl: './lancamento-cliente.page.html',
  styleUrls: ['./lancamento-cliente.page.scss'],
})
export class LancamentoClientePage implements OnInit {
  public espera:any = [];
  public finalizado:any = [];
  public key: any;
   public  agendamentos: any;
   
  constructor(public AuthService: AngularFireAuth,
    private agendaService: AgendaService) { }

   ngOnInit() {
    this.AuthService.user.subscribe(
       res => {
      
       this.agendaService.lacamento(res.uid).subscribe(
          data => {
            this.agendamentos = data
            console.log(data)
          }
        )
      }
    )
  }

}
