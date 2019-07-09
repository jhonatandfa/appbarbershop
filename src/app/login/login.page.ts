import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../entities/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usuario: Usuario;
  private loading: any;


  constructor(public AuthService: AuthService,
    private route: Router,
    public menu: MenuController,
    public LoadingCtrl: LoadingController,
    private ToastCtrl: ToastController) {
    this.menu.enable(false);
  }

  ngOnInit() {
    this.usuario = new Usuario();

  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }


  async logar() {
    await this.presentLoading();
    try {
      await this.AuthService.login(this.usuario);      
      this.route.navigateByUrl('/home');
    } catch (error) {
      this.usuario.senha = "";
      this.erros(error.code);
      console.error(error);
    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.LoadingCtrl.create({ message: 'Por Favor, aguarde...' });
    return this.loading.present();

  }

  async presentToast(message: string) {
    const toast = await this.ToastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  erros(error: string) {
    let message: string;
    switch (error) {
      case 'auth/wrong-password':
        message = "Senha inválida!";
        break;

      case 'auth/user-not-found':
        message = "Não há registro de usuário correspondente a esse e-mail!";
        break;

      case 'auth/argument-error':
        message = "E-mail ou senha inválidos!";
        break;
      case 'auth/invalid-email':
        message = "Formato de e-mail inválido!";
    }
    this.presentToast(message);
  }

  cadastrarSe(){
    this.route.navigateByUrl('/register');
  }

}