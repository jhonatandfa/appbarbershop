import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../entities/servico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-service',
  templateUrl: './novo-service.page.html',
  styleUrls: ['./novo-service.page.scss'],
})
export class NovoServicePage implements OnInit {
  public services:any[] = []
  public service:Servico = new Servico()
  constructor(public agendamentoSerivce:ServicoService, 
    private serviceService: ServicoService,
    private route:Router) { }

  ngOnInit() {
    this.serviceService.getAll().subscribe(
      data =>{
        this.services = data;
      }
    )
  }

  goBack(){
    this.route.navigate(['add-service'])
  }

  addService(){
    this.agendamentoSerivce.save(this.service);
    this.service.nome = ''
  
}
}
