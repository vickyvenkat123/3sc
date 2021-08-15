import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDocsComponent } from './show-docs.component';


const routes: Routes = [
  {
    path: '',
    component:ShowDocsComponent 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDocsModule { }
