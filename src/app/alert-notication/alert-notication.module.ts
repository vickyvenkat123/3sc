import { NgModule } from '@angular/core';
import { AlertNotificationComponent } from './alert-notification.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component:AlertNotificationComponent 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertNoticationModule { }
