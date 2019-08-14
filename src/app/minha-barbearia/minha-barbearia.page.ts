import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minha-barbearia',
  templateUrl: './minha-barbearia.page.html',
  styleUrls: ['./minha-barbearia.page.scss'],
})
export class MinhaBarbeariaPage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goEditarBarbearia(){
    
    this.route.navigateByUrl('/editar-barbearia');
  }

  goAgenda(){
    this.route.navigateByUrl('/agenda');
  }
}
