import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { Routes, RouterModule } from '@angular/router';

import { PaichanComponent } from '../components/paichan/paichan.component';
import { DiaoduComponent } from '../components/diaodu/diaodu.component';
import { CaiwuComponent } from '../components/caiwu/caiwu.component';
import { DingdanComponent } from '../components/dingdan/dingdan.component';
import { GlobalstatusComponent } from '../components/globalstatus/globalstatus.component';
import { DeviceComponent } from '../components/device/device.component';
import { CangkuComponent } from '../components/cangku/cangku.component';

// 各版块组件
// 仓库
import { FenbuMapComponent } from '../components/cangku/fenbu-map/fenbu-map.component';
import { GongjifenComponent } from '../components/cangku/gongjifen/gongjifen.component';
import { MubiaoxiaolvComponent } from '../components/cangku/mubiaoxiaolv/mubiaoxiaolv.component';
import { JixiaoComponent } from '../components/cangku/jixiao/jixiao.component';
import { FenbuBarComponent } from '../components/cangku/fenbu-bar/fenbu-bar.component';
import { ShijixiaolvComponent } from '../components/cangku/shijixiaolv/shijixiaolv.component';
import { ChuqinComponent } from '../components/cangku/chuqin/chuqin.component';
import { ChanliangComponent } from '../components/cangku/chanliang/chanliang.component';
import { CaigouAnalysisComponent } from '../components/cangku/caigou-analysis/caigou-analysis.component';
import { YusuanAnalysisComponent } from '../components/cangku/yusuan-analysis/yusuan-analysis.component';
import { CaigouliangAnalysisComponent } from '../components/cangku/caigouliang-analysis/caigouliang-analysis.component';
import { HuocunjiegouComponent } from '../components/cangku/huocunjiegou/huocunjiegou.component';
import { HuocunyujingComponent } from '../components/cangku/huocunyujing/huocunyujing.component';
import { StatusTableComponent } from '../components/cangku/status-table/status-table.component';

const routes: Routes = [
  { path: 'cangku', component: CangkuComponent },
  { path: 'paichan', component: PaichanComponent },
  { path: 'diaodu', component: DiaoduComponent },
  { path: 'caiwu', component: CaiwuComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'dingdan', component: DingdanComponent },
  { path: 'globalstatus', component: GlobalstatusComponent },

  { path: 'gongjifen', component: GongjifenComponent }
];

const COMPONENTS = [
  PaichanComponent,
  DiaoduComponent,
  DingdanComponent,
  CaiwuComponent,
  GlobalstatusComponent,
  DeviceComponent,
  CangkuComponent,
  FenbuMapComponent,
  GongjifenComponent,
  MubiaoxiaolvComponent,
  JixiaoComponent,
  FenbuBarComponent,
  ShijixiaolvComponent,
  ChuqinComponent,
  ChanliangComponent,
  CaigouAnalysisComponent,
  YusuanAnalysisComponent,
  CaigouliangAnalysisComponent,
  HuocunjiegouComponent,
  HuocunyujingComponent,
  StatusTableComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    ...COMPONENTS
  ]
})

export class ModelModule { }
