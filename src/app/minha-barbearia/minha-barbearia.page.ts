import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { BarbeariaService } from '../services/barbearia.service';

@Component({
  selector: 'app-minha-barbearia',
  templateUrl: './minha-barbearia.page.html',
  styleUrls: ['./minha-barbearia.page.scss'],
})
export class MinhaBarbeariaPage implements OnInit {
  private status: boolean;
  key:any;
  constructor(private route:Router,
    private AuthService: AngularFireAuth,
    private barbeariaService:BarbeariaService ) { }
  

  ngOnInit() {
    this.AuthService.user.subscribe(
      data => {
        this.key = data.uid
        this.barbeariaService.get(this.key).subscribe(
          data => {
            this.status = data['status'];
          }
        )
      }
    )
  }

  openAndClosed(){
    console.log(this.status)
    this.barbeariaService.openAndClosed(this.key,this.status)
  }

  goEditarBarbearia(){
    
    this.route.navigateByUrl('/editar-barbearia');
  }

  goAgenda(){
    this.route.navigateByUrl('/agenda');
  }
}
