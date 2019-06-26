import { Component } from '@angular/core';
import { BarbeariaService } from '../services/barbearia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private barbearias$:any;

  constructor(private barberiaService:BarbeariaService) {
    this.barbearias$ = this.barberiaService.getAll();
    console.log(this.barbearias$);
  }

}
