import { Component, OnInit } from '@angular/core';
import { BarbeariaService } from '../services/barbearia.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  ngOnInit(): void {
    this.listBarber();
    
  }
  public barbearias$:any;
  public user$:any;
 // public barbearia:Barbearia = new Barbearia();

  key:any;
  constructor(private barberiaService:BarbeariaService, 
    ) {
  }

  listBarber(){
    this.barbearias$ = this.barberiaService.getAll();
  }
  
  doRefresh(event) {
    this.listBarber();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}
