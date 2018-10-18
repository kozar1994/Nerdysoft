import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {AuthComponent} from './auth/auth.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {TaskComponent} from './task/task.component';

const routers = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'task', component: TaskComponent
  }
  //{path: '**', redirect: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class RouterAppModule {

}