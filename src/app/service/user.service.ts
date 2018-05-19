import { Injectable } from '@angular/core';
import { APIConfig } from 'app/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  /* 获取用户信息 */
  GetUserProfile(uid) : Observable<any> {
    let url = APIConfig.HOST + APIConfig.PATH_SELF_PROFILE;
    return this.http.get(url, { withCredentials: true });
  }

  UpdateUserCover(cover) : Observable<any> {
    let url = APIConfig.HOST + APIConfig.PATH_USER_COVER;
    let data = {
      'cover': cover,
    }
    return this.http.put(url, data, { withCredentials: true });
  }
}
