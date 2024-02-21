import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalExcluirClienteComponent } from './modal-excluir-cliente/modal-excluir-cliente.component';
import { ModalCriarClienteComponent } from './modal-criar-cliente/modal-criar-cliente.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ModalExcluirClienteComponent,
    ModalCriarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
