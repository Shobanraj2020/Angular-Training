import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
                        {path:'',redirectTo:'/dashboard-component',pathMatch:'full'},
                        {path:"dashboard-component",component:DashboardComponent},
                        {path:"home-component/:id",component:HomeComponent},
                         {path:"login-component",component:LoginComponent},
                         {path:"register-component",component:RegisterComponent},
                        {path:"main-component",component:MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
