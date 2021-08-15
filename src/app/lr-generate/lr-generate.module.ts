import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LrGenerateComponent } from './lr-generate/lr-generate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:LrGenerateComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LrGenerateModule { }
