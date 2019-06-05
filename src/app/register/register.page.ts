import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegister: User = {};
  private loading: any;

  constructor(private AuthService: AuthService, private LoadingCtrl: LoadingController, private ToastCtrl: ToastController) { 
    
  }

  ngOnInit() {
  }

  async register(){
    await this.presentLoading();

    try{
        await this.AuthService.register(this.userRegister);
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
}
