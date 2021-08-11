import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MastersComponent } from './masters/masters.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full"},
  {path: 'home', component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component:DashboardComponent},
  {path: 'masters', component:MastersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
