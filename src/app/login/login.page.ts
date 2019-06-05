import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoadingController, ToastController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  private loading: any;


  constructor(private AuthService: AuthService,
    private route: Router,
    public menu: MenuController,
    public LoadingCtrl: LoadingController,
    private ToastCtrl: ToastController) {
      this.menu.enable(false);
     }

  ngOnInit() {
    
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  
  async logar(){
    await this.presentLoading();
    try{
      await this.AuthService.login(this.userLogin);
      this.route.navigateByUrl('/home');
  } catch(error ){
      this.userLogin.senha = "";
      let message:string;

      switch(error.code){
        case 'auth/wrong-password':
        message = "Senha inválida!";
        break;

        case 'auth/user-not-found':
        message = "Não há registro de usuário correspondente a esse e-mail!";
        break;

        case 'auth/argument-error':
        message = "E-mail ou senha inválidos!";
        break;
      }
      console.error(error);
      this.presentToast(message);
  }finally{
      this.loading.dismiss();
  }
   
  }

  async presentLoading() {
    this.loading = await this.LoadingCtrl.create({message: 'Por Favor, aguarde...'});
    return this.loading.present();

  }

  async presentToast(message: string) {
    const toast = await this.ToastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}