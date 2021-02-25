import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Util } from './Util';
import { IS_DEBUG, PF_TEST_URL, PF_SERVE_URL } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {
  url: string;
  name: string;

  constructor(public http: HttpClient, public util: Util) {
    if (IS_DEBUG) {
      this.url = PF_TEST_URL;
    } else {
      this.url = PF_SERVE_URL;
    }

  }

  post(endpoint: string, body: any, reqOpts?: any, postType?: boolean) {
    return this.http.post(this.url + endpoint, body, reqOpts);
  }
  /**
   *
   * @param obj : 传入的参数对象
   * @param mainUrl ：主接口
   * @param childUrl ：子接口
   * @param callback ：回调函数
   * @param that ：调整回调函数指针指向
   * @param postType ：修改请求接口（默认：ross/call/）（ture：ross/api/）
   */
  baseAPI(api_url: string, data, callback, that, postType: boolean = false) {
    let header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    this.post(api_url, data, header, postType).subscribe(
      (res: any) => {
        // console.log(res);
        callback(res, that);
      },
      (err) => {
        // console.log(err);
      }
    );
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        if (typeof params[k] !== 'undefined') {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }
  postFormData(endpoint: string, params?: any, reqOpts?: any) {
    let par = {}; // 重新组合参数数组
    if (params) {
      for (let k in params) {
        if (typeof params[k] !== 'undefined') {
          par[k] = params[k];
        }
      }
    }
    return this.http.post(this.url + endpoint, this.buildURLSearchParams(par), reqOpts);
  }



  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + endpoint, body, reqOpts);
  }
  private buildURLSearchParams(paramMap) {
    if (!paramMap) {
      return new HttpParams({ fromString: '' });
    }
    // tslint:disable-next-line:prefer-const
    let formstr = Object.keys(paramMap).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(paramMap[key]);
    }).join('&');
    return new HttpParams({ fromString: formstr });
  }
}
