import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Util } from './Util';
import { IS_DEBUG, PHP_TEST_URL, PHP_SERVE_URL } from './constants.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  name: string;

  constructor(
    public http: HttpClient,
    public util: Util
  ) {
    if (IS_DEBUG) {
      this.url = PHP_TEST_URL;
    } else {
      this.url = PHP_SERVE_URL;
    }
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
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }
  postFormData(endpoint: string, params?: any, reqOpts?: any) {
    const par = {}; // 重新组合参数数组
    if (params) {
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          par[k] = params[k];
        }
      }
    }
    return this.http.post(this.url + endpoint, this.buildURLSearchParams(par), reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + endpoint, body, reqOpts);
  }

  /**
   * 根据接口去获取数据，再把数据灌入模块，然后呈现页面
   * 以下三个方法用于请求接口平台的接口
   */
  getData(api_url, data) {
    const header = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    this.newpost(api_url, data, header).subscribe(
      (res: any) => {
        // return res;
      },
      (err) => {
        // return res;
      }
    );
  }

  newpost(url: string, body: any, reqOpts?: any) {
    reqOpts = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return this.newpostFormData(url, body, reqOpts);
  }

  newpostFormData(url: string, params?: any, reqOpts?: any) {
    const par = {}; // 重新组合参数数组
    if (params) {
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          par[k] = params[k];
        }
      }
    }
    return this.http.post(url, this.buildURLSearchParams(par), reqOpts);
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
