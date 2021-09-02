import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from './components/main-form/main-form.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainFormComponent
  }, {
    path: 'summary',
    component: SummaryPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
