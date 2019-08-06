import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../entities/agendamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  public agendamento = new Agendamento();
  private d1 = new Date('2017-01-19 10:00:00');
  private d2 = new Date('2017-01-19 16:00:00').getHours();
  public cor:string = "";
  public hours:any = [];
  public $arrs = [
    "Maquina",
    "Tesouro",
    "Barba",
    "Reflexo"
  ];
  
  constructor(private router: Router) { }

  ngOnInit() {
    while(this.d1.getHours() < this.d2){
    this.hours.push(this.d1.getTime());
    this.d1.setMinutes( this.d1.getMinutes() + 30);
  }
  console.log(this.agendamento.dataDoAgendamento);
  }

  getDate(e){
    this.agendamento.dataDoAgendamento =  e.detail.value;
  }
  getService(e){
    this.agendamento.servico = e.detail.value;
    console.log(this.agendamento.servico);
  }

  getHora(e){
    this.agendamento.horaDoAgendamento = e;
  }

 getCorHour(){
   this.cor = ".fundo1";
 }

 goConfirmar(){
  this.router.navigateByUrl('/confirma-agendamento');
 }
}
