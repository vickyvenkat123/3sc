import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceResComponent } from './exce-res/exce-res.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:ExceResComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceResModule { }
