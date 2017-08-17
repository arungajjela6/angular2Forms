import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'


const appRoutes: Routes =[

    {path: 'home', component:HomeComponent},
    {path: 'form', component:FormComponent},
    {path: 'login', component:LoginComponent},
    {path: 'login/form', redirectTo: '/form', pathMatch:'full'},
    { path: "",     component: HomeComponent}

]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, FormComponent,HomeComponent,LoginComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
