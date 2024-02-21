import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitulosRoutingModule } from './titulos-routing.module';
import { TitulosComponent } from './titulos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalExcluirComponent } from './modal-excluir/modal-excluir.component';
import { ModalNovoTituloComponent } from './modal-novo-titulo/modal-novo-titulo.component';


@NgModule({
  declarations: [
    TitulosComponent,
    ModalExcluirComponent,
    ModalNovoTituloComponent
  ],
  imports: [
    CommonModule,
    TitulosRoutingModule,
    SharedModule
  ]
})
export class TitulosModule { }
