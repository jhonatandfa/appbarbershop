import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MinhaBarbeariaPage } from './minha-barbearia.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaBarbeariaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MinhaBarbeariaPage]
})
export class MinhaBarbeariaPageModule {}
