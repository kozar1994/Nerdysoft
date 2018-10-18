import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RouterAppModule} from './router-app.module';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {TaskComponent} from './task/task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {TaskService} from './service/task.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterAppModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
