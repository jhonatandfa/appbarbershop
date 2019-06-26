import { Component, OnInit } from '@angular/core';
import { Barbearia } from '../entities/barbearia';
import { BarbeariaService } from '../services/barbearia.service';

@Component({
  selector: 'app-barbearia',
  templateUrl: './barbearia.page.html',
  styleUrls: ['./barbearia.page.scss'],
})
export class BarbeariaPage implements OnInit {
public barbearia$:any;

  constructor(private barbeariaService: BarbeariaService) {
    this.barbearia$  = barbeariaService.get("");
   }

  ngOnInit() {
  }

}
