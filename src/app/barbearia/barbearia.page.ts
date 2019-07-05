import { Component, OnInit } from '@angular/core';
import { BarbeariaService } from '../services/barbearia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barbearia',
  templateUrl: './barbearia.page.html',
  styleUrls: ['./barbearia.page.scss'],
})
export class BarbeariaPage implements OnInit {
public barbearia$:any;

  constructor(private barbeariaService: BarbeariaService,
     private route:ActivatedRoute, 
     private router: Router) {  }

  ngOnInit() { 
    this.barbearia$ = this.barbeariaService.get(this.route.snapshot.paramMap.get('id'));
  }

  goAgendamento(){
    this.router.navigateByUrl('/agendamento');
  }
}
