import { NgModule } from '@angular/core';
import { UploadDocsComponent } from './upload-docs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:UploadDocsComponent 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadDocsModule { }
