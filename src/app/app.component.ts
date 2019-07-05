import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Usuario } from './entities/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  public user:Usuario;
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
      title: 'Configurações',
      url: '/config',
      icon: 'construct'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
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
