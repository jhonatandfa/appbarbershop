import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public txtUser:string;
  public txtSenha:string;

  private  user = {
    usuario: 'root',
    senha: "123"
  }
  erro:string;
  constructor(private route: Router) { }

  ngOnInit() {
    this.txtUser = "";
    this.txtSenha = "";
  }

  

  logar(){
    
   console.log(this.txtUser);
   if(this.txtUser == this.user.usuario && this.txtSenha == this.user.senha){
     this.route.navigateByUrl('/home')
   //console.log("logado");
   }else{
    this.erro = "Usuário ou senha inválidos";
    this.txtUser = "";
    this.txtSenha = "";
   }
  }
}
