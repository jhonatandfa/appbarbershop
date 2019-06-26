import { Component, OnInit } from '@angular/core';
import { BarbeariaService } from '../services/barbearia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barbearia } from '../entities/barbearia';

@Component({
  selector: 'app-barbearia',
  templateUrl: './barbearia.page.html',
  styleUrls: ['./barbearia.page.scss'],
})
export class BarbeariaPage implements OnInit {
public barbearia$:any;
public barbearia:Barbearia = new Barbearia();
public teste = {};

  constructor(private barbeariaService: BarbeariaService, private route:ActivatedRoute, private router: Router) {
    this.teste  = this.barbeariaService.get(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

}
