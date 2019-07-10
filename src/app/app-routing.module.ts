import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { RegisterGuard } from './guards/register.guard';
import { Usuario } from './entities/usuario';
import { UsersService } from './services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule', canActivate: [RegisterGuard] },
  { path: 'register-barber', loadChildren: './register-barber/register-barber.module#RegisterBarberPageModule', canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard]},
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule', canActivate: [AuthGuard]},
  { path: 'barbearia/:id', loadChildren: './barbearia/barbearia.module#BarbeariaPageModule' },
  { path: 'agendamento', loadChildren: './agendamento/agendamento.module#AgendamentoPageModule' },
  { path: 'editar-perfil', loadChildren: './editar-perfil/editar-perfil.module#EditarPerfilPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}