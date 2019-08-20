import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Usuario } from './entities/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit{
  public user:Usuario = new Usuario();
  key:any;
  public inicial:string[];
  public nome1:string;
  public sobrenome:string;

  ngOnInit() {
    this.AuthService.user.subscribe(
      res=>{
        this.key = res.uid;
       this.userService.get(this.key).subscribe(
         u => {
          
           this.user = u
           this.getInit();
          }
          )
        }  
        )
  }

getInit(){
  this.inicial = this.user.nome.split(" ", 2); 
  this.nome1 = this.inicial[0].charAt(0).toUpperCase();
  this.sobrenome = this.inicial[1].charAt(0).toUpperCase();
}

  public appPages = [
    {
      title: 'Barbearias',
      url: '/home',
      icon: 'cut'
    },
    {
      title: 'Seja um parceiro',
      url: '/register-barber',
      icon: 'jet'
    },
    {
      title: 'Meus agendamentos',
      url: '/lancamento-cliente',
      icon: 'stopwatch'
    },
        {
          title: 'Minha Barbearia',
          url: '/minha-barbearia',
          icon: 'cut'
        },
    {
      title: 'Configurações',
      url: '/config',
      icon: 'construct'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public AuthService: AngularFireAuth,
    private userService:UsersService
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  
 
  
}
