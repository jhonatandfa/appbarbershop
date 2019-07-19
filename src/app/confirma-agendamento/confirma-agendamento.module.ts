import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmaAgendamentoPage } from './confirma-agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmaAgendamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmaAgendamentoPage]
})
export class ConfirmaAgendamentoPageModule {}
