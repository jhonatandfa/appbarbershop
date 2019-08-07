import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../entities/servico';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  public service = new Servico();
  constructor(private AuthService: AngularFireAuth,
    public agendamentoSerivce:ServicoService) { }

  ngOnInit() {
  }

  addService(){
        this.agendamentoSerivce.save(this.service);
      
  }
}
