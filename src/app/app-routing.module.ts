import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MastersComponent } from './masters/masters.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full"},
  {path: "home", component:HomeComponent},
  {path: "dashboard", component:DashboardComponent,
  children:[
    {path: "masters", component:MastersComponent},
    {path: "uploaddocs", component:UploadDocsComponent},
    {path: "masters", component:MastersComponent},
    {path: "masters", component:MastersComponent},
    {path: "masters", component:MastersComponent}
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
