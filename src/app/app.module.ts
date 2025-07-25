
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';

import { AppComponent } from './app.component';

import { TodoListComponent } from './components/todos/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallbackComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // <--- Isso é ESSENCIAL
})
export class AppModule { }
