import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'table',        loadChildren: './modules/@olib-table/table-sample/table-sample.module#TableSampleModule'},
  { path: 'dropdown',     loadChildren: './modules/@olib-dropdown/dropdown-sample/dropdown-sample.module#DropdownSampleModule'},
  { path: 'datepicker',   loadChildren: './modules/@olib-datepicker/datepicker-sample/datepicker-sample.module#DatepickerSampleModule'},
  { path: 'radio',        loadChildren: './modules/@olib-radio/radio-sample/radio-sample.module#RadioSampleModule'},
  { path: '',         redirectTo: 'table', pathMatch: 'full' },
  { path: '**',       redirectTo: 'table' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
