import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private AuthService: AuthService,
    private route:Router) { }

  ngOnInit() {
  }

  sair(){
    this.AuthService.logout();
  }

   goEditarPerfil(){
    this.route.navigateByUrl('/editar-perfil');
  }
}
