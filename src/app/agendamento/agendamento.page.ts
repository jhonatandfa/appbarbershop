import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  private d1 = new Date('2017-01-19 10:00:00');
  private d2 = new Date('2017-01-19 16:00:00').getHours();

  public hours:any = [];
  constructor() { }

  ngOnInit() {
    while(this.d1.getHours() < this.d2){
    console.log(this.d1.getHours())
    this.hours.push(this.d1.getTime());
    this.d1.setMinutes( this.d1.getMinutes() + 30);
  }
  console.log(this.hours)


  }
}
