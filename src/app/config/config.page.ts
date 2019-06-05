import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  sair(){
    this.AuthService.logout();
  }
}
