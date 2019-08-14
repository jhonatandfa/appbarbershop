import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LancamentoClientePage } from './lancamento-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: LancamentoClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LancamentoClientePage]
})
export class LancamentoClientePageModule {}
