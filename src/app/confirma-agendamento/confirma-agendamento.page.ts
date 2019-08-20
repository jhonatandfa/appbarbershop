import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Agendamento } from '../entities/agendamento';
import { BarbeariaService } from '../services/barbearia.service';
import { AgendamentoService } from '../services/agendamento.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-confirma-agendamento',
  templateUrl: './confirma-agendamento.page.html',
  styleUrls: ['./confirma-agendamento.page.scss'],
})
export class ConfirmaAgendamentoPage implements OnInit {
  public agendamento: Agendamento = new Agendamento()
  key: any;
  public servico: any;
  public preco: any;
  public barbearia$: any;
  constructor(private router: Router,
    private barbeariaService: BarbeariaService,
    private route: ActivatedRoute,
    public agendamentoSerivce: AgendamentoService,
    private AuthService: AngularFireAuth) {
    this.route.queryParams.subscribe(params => {
      let getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.agendamento = getNav.extras.state.obj;
      }

    });
  }

  ngOnInit() {
    this.barbearia$ = this.barbeariaService.get(this.agendamento.idBarbearia);
    let txt = this.agendamento.servico.split("              ");
    this.servico = txt[0];
    this.preco = txt[1];
  }

  confirmar() {
    this.AuthService.user.subscribe(
      res => {
        this.agendamento.idCliente = res.uid;
      }
    )
    this.AuthService.user.subscribe(
      () =>
        this.agendamentoSerivce.save(this.agendamento)
          .then(() => {
             //Colocar ALERT AQUIIIIIIIIIIIII

             
        setInterval(function(){
          this.router.navigateByUrl('/barbearia/' + this.agendamento.idBarbearia);
          
        }, 3000);
          })
    )
  }
}
