import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsMainComponent } from './echartsMain.component';
import { ModelModule } from 'src/app/model/model.module';
const routes: Routes = [
  {
    path: '',
    component: EchartsMainComponent
  }
];
@NgModule({
  declarations: [EchartsMainComponent],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ModelModule,
    RouterModule.forChild(routes)
  ]
})
export class EchartsMainModule { }
