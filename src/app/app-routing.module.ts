import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'echartsMain', pathMatch: 'full' },
  {
    path: 'echartsMain',
    loadChildren: () => import('./model/echartsMain/echartsMain.module').then(m => m.EchartsMainModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
