import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router }  from '@angular/router';

enum ContentType {
  JSON = "application/json",
  TEXT = "text/plain",
  UNKNOWN = "UNKNOWN",
}

@Injectable()
export class HttpService extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router :Router) {
    super(backend, defaultOptions);
  }

  /* 获取返回结果的Content-Type，因为Content-Type中可能包含诸如charset=utf8之类的字符串，因此不能全字符匹配 */
  getContentType(res) :string {
    let contentType = res.headers.get('Content-Type');
    if(contentType==undefined||contentType==null){
      return ContentType.UNKNOWN;
    } else if(contentType.indexOf('application/json')!=-1) {
      return ContentType.JSON;
    } else if(contentType.indexOf('text/plain')!=-1) {
      return ContentType.TEXT;
    }
    return ContentType.UNKNOWN;
  }

  parseResponseBody(res) :any {
    let contentType = this.getContentType(res);
    if(contentType == ContentType.JSON) {
      return res.json();
    } else if(contentType == ContentType.TEXT) {
      return res.text();
    }
    return null;
  }

  request(url: Request, options?: RequestOptionsArgs): Observable<Response> {
    console.debug('request...', url, options);
    url.withCredentials = true;
    return super.request(url, options).map(res => {
      let body = this.parseResponseBody(res);
      if(body!=null){
        return body;
      }
      return res;
    }).catch(res => {
      console.debug('catch', res);
      if(res.status == 401) {
        console.debug("401 Unauthorized")
        this.router.navigate(['/login'], { queryParams: { redirect: this.router.url }});
      }
      res.error = this.parseResponseBody(res);
      return Observable.throw(res);
    });
  }
}
