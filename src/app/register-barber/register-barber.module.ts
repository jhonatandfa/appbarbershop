import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterBarberPage } from './register-barber.page';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: RegisterBarberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBIhxMfDOwy200KEifG4ZeVMBof2cbtL9Y"
    })
  ],
  declarations: [RegisterBarberPage]
})
export class RegisterBarberPageModule { }
