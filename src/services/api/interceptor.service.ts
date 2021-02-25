import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { TimeoutError } from 'rxjs';
import { IS_DEBUG } from './constants.service';
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq;
    if (req.url.indexOf('/assets') > -1) {
      authReq = req.clone({
        url: (req.url)
      });
    }else {
      authReq = req.clone({
        url: (req.url),
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    }


    return <any>next.handle(authReq).pipe(mergeMap((event: any) => {
          if (event instanceof HttpResponse && event.status !== 200) {
            return throwError(event);
          }
          // // console.log(event);
          return Observable.create(observer => {
            if (event.body) {
              // 统一判断全局状态返回
              if (event.body.status == -99 || (event.body.status>=6000 && event.body.status<8000)) {
               // console.log('99');
              } else if (event.body.status == -100) {
                //弹出微信授权窗口
               // console.log('100');
              }
              observer.next(event);
            } else {
              observer.next(event);
            }
            if (event.type > 0) {

            }
          }); // 请求成功返回响应
        }),
        catchError((res: HttpResponse<any>) => {
          // 请求失败处理
         if (res instanceof TimeoutError) {
            // console.log('请求超时,请稍后再试!');
          } else {
            switch (res.status) {
              case 0:
                // console.log('未知的Api');
                break;
              case 401:
                break;
              case 404:
                // console.log('Api请求地址不存在');

                break;
              case 403:
                // console.log('业务错误');
                break;
              case 500:
                // console.log('服务器出错');
                break;
            }
          }
          return throwError(event);
        }));
  }
}

