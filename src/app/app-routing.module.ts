import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoosemoduleComponent } from './choosemodule/choosemodule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { ExportDashboardComponent } from './export-dashboard/export-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UploadDocsComponent } from './upload-docs/upload-docs.component';
import { UploadDocsModule } from './upload-docs/upload-docs.module';

const routes: Routes = [
  { path: "login", 
  component: LoginComponent,
  canActivate : [AuthGuard]
 },
  { path: "", redirectTo: "login", pathMatch: "full"},
  {path:'chooseModule',component:ChoosemoduleComponent},
  // {path:'export-dashboard',component:ExportDashboardComponent},
  {path: "dashboard", component:DashboardComponent, canActivate:[AuthGuard],
  children:[
    // {path: "masters", component:MastersComponent},
    // {path: "uploaddocs", component:UploadDocsComponent},
    // {path: "masters", component:MastersComponent},
    // {path: "masters", component:MastersComponent},
    // {path: "masters", component:MastersComponent},
    
    {
      path: 'alert-notification', 
      loadChildren: () => import('./alert-notication/alert-notication.module').then( m => m.AlertNoticationModule)
    },
    {
     path: 'masters',
     loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule)
    },
    {
      path: 'upload-docs',
      loadChildren: () => import('./upload-docs/upload-docs.module').then(m => m.UploadDocsModule)
    },
    {
      path: 'show-docs',
      loadChildren: () => import('./show-docs/show-docs.module').then(m => m.ShowDocsModule)
    },
    {
      path: 'lr-generate',
      loadChildren: () => import('./lr-generate/lr-generate.module').then(m => m.LrGenerateModule)
    },
    {
      path: 'audit-reports',
      loadChildren: () => import('./audit-reports/audit-reports.module').then(m => m.AuditReportsModule)
    },
    {
      path: 'exce-res',
      loadChildren: () => import('./exce-res/exce-res.module').then(m => m.ExceResModule)
    },
  ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
