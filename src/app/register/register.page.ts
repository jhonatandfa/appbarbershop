import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../entities/usuario';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private loading: any;
  private usuario: Usuario;
  public confirmSenha:string;

  constructor(private AuthService: AuthService,
    private route: Router,
    private AlertCtrl: AlertController,
     private LoadingCtrl: LoadingController,
      private ToastCtrl: ToastController,
      public menu: MenuController, private UserService: UsersService) { 
        this.menu.enable(false);
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  teste(){
    this.UserService.save(this.usuario);
  }

  confimSenha(){
    if(this.usuario.nome == null){
      this.presentToast("Por favor informe o seu nome!");
    }else if(this.usuario.email == null){
      this.presentToast("Por favor informe o seu e-mail!");
    } 
    else if(this.usuario.senha !== this.confirmSenha){
      this.presentToast("As senhas não se coincidem!");
      this.confirmSenha = "";
    }else {
      this.register();
    }
  }

  async register(){
    await this.presentLoading();

    try{
        await this.AuthService.register(this.usuario);
        await this.UserService.save(this.usuario);
        await this.presentAlert();
        await this.route.navigateByUrl('/login');

    } catch(error ){
        console.error(error);
        let message:string;
        switch(error.code){
          case 'auth/email-already-in-use':
          message = "O e-mail está sendo usado!";
          break;

          case 'auth/invalid-email':
          message = "E-mail inválido!";
          break;

          case 'auth/weak-password':
          message = "A senha deve ter no mínimo 6 caracteres!";
          break;

          case 'auth/argument-error':
          message = "Erro ao cadastrar!";
          break;
        }
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

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Cadastrado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  login(){
    this.route.navigateByUrl('/login');
  }
}
