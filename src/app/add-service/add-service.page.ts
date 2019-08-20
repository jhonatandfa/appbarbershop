import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../entities/servico';
import { ActivatedRoute, Router } from '@angular/router';
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
  public v:number = 0.0 ;
  public serviceSelected:Servico;
  constructor(private AuthService: AngularFireAuth,
    public agendamentoSerivce:ServicoService,
    private router: ActivatedRoute,
    private route: Router,
    private barbeariaService:BarbeariaService,

    private serviceService:ServicoService) { }

  ngOnInit() {
    this.AuthService.user.subscribe(
      res => {
        this.key = res.uid
        this.barbeariaService.get(this.key).subscribe(
         data => {
            this.barbearia = data
            this.services = data['servico'] 
            console.log(this.services)
         }
        )
      }
    );

  }

  onSelect(obj){
    this.serviceSelected = obj;
    console.log(this.serviceSelected)
  }

  save(){
   for(let s of this.services){
     if(s.nome == this.serviceSelected.nome){
       s.preco = this.serviceSelected.preco;
       break;
      }
    }
    this.barbeariaService.attPreco(this.key, this.services)
  }

  delete(service){
    this.services = this.services.filter((s) => s !== service)
    this.barbeariaService.attPreco(this.key, this.services)
  }

  newService(){
    this.route.navigate(['/novo-service'])
  }


  addService(){
        this.agendamentoSerivce.save(this.service);
      
  }
}
