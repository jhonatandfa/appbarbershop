import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public txtUser:string;
  public txtSenha:string;

  private  user = {
    login: '',
    senha: ''
  }
  erro:string;
  constructor(private route: Router,
    public menu: MenuController,
    public alertController: AlertController,
    public loadingController: LoadingController) {
      this.menu.enable(false);
     }

  ngOnInit() {
    
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

  

  logar(){
    
   console.log(this.txtUser);
   if('root' == this.user.login && '123' == this.user.senha){
    
     this.route.navigateByUrl('/home')
   //console.log("logado");
   }else{
    this.presentAlert();
    this.user.login = "";
    this.user.senha = "";
   }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro ao efetuar Login',
      message: 'Usuário ou senha inválidos.',
      buttons: ['OK'],
      cssClass: '--background'
    });

    await alert.present();
  }

  
}
