import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocacoesRoutingModule } from './locacoes-routing.module';
import { LocacoesComponent } from './locacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalAlugarComponent } from './modal-alugar/modal-alugar.component';
import { ModalDevolverComponent } from './modal-devolver/modal-devolver.component';


@NgModule({
  declarations: [
    LocacoesComponent,
    ModalAlugarComponent,
    ModalDevolverComponent
  ],
  imports: [
    CommonModule,
    LocacoesRoutingModule,
    SharedModule
  ]
})
export class LocacoesModule { }
