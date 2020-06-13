import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {OpenaccountComponent} from './openaccount/openaccount.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
  { path: 'user/:name', component: UserComponent },
  { path: 'deposit/:id', component: DepositComponent },
  { path: 'withdraw/:id', component: WithdrawComponent },
  { path: 'register', component: OpenaccountComponent },
  { path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
