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
  { path: 'barbearia/:id', loadChildren: './barbearia/barbearia.module#BarbeariaPageModule', canActivate: [AuthGuard] },
  { path: 'agendamento', loadChildren: './agendamento/agendamento.module#AgendamentoPageModule', canActivate: [AuthGuard] },
  { path: 'editar-perfil', loadChildren: './editar-perfil/editar-perfil.module#EditarPerfilPageModule', canActivate: [AuthGuard] },
  { path: 'minha-barbearia', loadChildren: './minha-barbearia/minha-barbearia.module#MinhaBarbeariaPageModule', canActivate: [AuthGuard] },
  { path: 'editar-barbearia', loadChildren: './minha_barbearia/editar-barbearia/editar-barbearia.module#EditarBarbeariaPageModule',canActivate: [AuthGuard] },
  { path: 'add-service', loadChildren: './add-service/add-service.module#AddServicePageModule', canActivate: [AuthGuard] },
  { path: 'confirma-agendamento', loadChildren: './confirma-agendamento/confirma-agendamento.module#ConfirmaAgendamentoPageModule', canActivate: [AuthGuard] },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule', canActivate: [AuthGuard] },
  { path: 'lancamento-cliente', loadChildren: './lancamento-cliente/lancamento-cliente.module#LancamentoClientePageModule', canActivate: [AuthGuard] },
  { path: 'novo-service', loadChildren: './novo-service/novo-service.module#NovoServicePageModule', canActivate: [AuthGuard] }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}