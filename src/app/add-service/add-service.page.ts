import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../entities/servico';
import { ActivatedRoute } from '@angular/router';
import { Barbearia } from '../entities/barbearia';
import { BarbeariaService } from '../services/barbearia.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  public key:string;
  public barbearia:Barbearia;
  public services:any;
  public service = new Servico();
  constructor(private AuthService: AngularFireAuth,
    public agendamentoSerivce:ServicoService,
    private router: ActivatedRoute,
    private barbeariaService:BarbeariaService,
    private serviceService:ServicoService) { }

  ngOnInit() {
    this.key = this.router.snapshot.paramMap.get('key');
    this.barbeariaService.get(this.key).subscribe(
     data => {
        this.barbearia = data;

     //   this.services = data['servico'];
        
     }
    )

  this.serviceService.getAll().subscribe(
    data => {
      
      this.services = data
      
    }
  );
  }

  save(e){
    console.log(e)
    console.log(this.barbearia.servico)
  }

  addService(){
        this.agendamentoSerivce.save(this.service);
      
  }
}
