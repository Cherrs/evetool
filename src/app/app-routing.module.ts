import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {XdkdComponent} from './xdkd/xdkd.component';
import {ContractComponent} from './contract/contract.component';


const routes: Routes = [
  { path: '', redirectTo: '/xdkd', pathMatch: 'full' },
  {path:'xdkd',component:XdkdComponent},
  {path:'Contract',component:ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
