import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacoesComponent } from './locacoes.component';

const routes: Routes = [
  {
    path: "",
    component: LocacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacoesRoutingModule { }
