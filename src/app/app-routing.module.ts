import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path:'locacoes',
    loadChildren: () => import('./pages/locacoes/locacoes.module').then(m => m.LocacoesModule)
  },
  {
    path:'titulos',
    loadChildren: () => import('./pages/titulos/titulos.module').then(m => m.TitulosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }