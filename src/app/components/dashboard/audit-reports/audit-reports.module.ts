import { NgModule } from '@angular/core';
import { AuditReportsComponent } from './audit-reports/audit-reports.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:AuditReportsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditReportsModule { }
