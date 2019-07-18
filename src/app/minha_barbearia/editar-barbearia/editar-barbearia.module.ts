import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarBarbeariaPage } from './editar-barbearia.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBarbeariaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarBarbeariaPage]
})
export class EditarBarbeariaPageModule {}
