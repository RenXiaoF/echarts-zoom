import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
// http相关模块
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from '../services/api/api.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { InterceptorService } from 'src/services/api/interceptor.service';
// 公共模块
import { ModelModule } from './model/model.module';
import { IsJsonService } from 'src/services/api/isJson.service';

// 公共模块
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    ModelModule,
    TooltipModule.forRoot(),
  ],
  providers: [
    ApiService,
    IsJsonService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
