import { Component } from '@angular/core';
import { BarbeariaService } from '../services/barbearia.service';
import { Barbearia } from '../entities/barbearia';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public barbearias$:any;
 // public barbearia:Barbearia = new Barbearia();

  constructor(private barberiaService:BarbeariaService) {
    this.barbearias$ = this.barberiaService.getAll();
    console.log(this.barbearias$);
  }

}
