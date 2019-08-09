import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../entities/agendamento';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { BarbeariaService } from '../services/barbearia.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  public barbearia$:any;
  public agendamento = new Agendamento();
  private d1 = new Date('2017-01-19 10:00:00');
  private d2 = new Date('2017-01-19 16:00:00').getHours();
  public cor:string = "";
  public hours:any = [];
  

  constructor(private router:Router,
    private route: ActivatedRoute,
    private barberiaService:BarbeariaService) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.agendamento.idBarbearia = getNav.extras.state.obj;
        this.barbearia$ = this.barberiaService.get(this.agendamento.idBarbearia);
        console.log(this.barbearia$)
      }

    });
  }

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
    console.log(e)
  }

 getCorHour(){
   this.cor = ".fundo1";
 }

 goConfirmar(){
   this.agendamento.momento = new Date().getMilliseconds();
   console.log(this.agendamento)
  let navigationExtras: NavigationExtras = {
    state: {
    obj : this.agendamento
    }
  }
  this.router.navigateByUrl('/confirma-agendamento', navigationExtras);
 }
}
