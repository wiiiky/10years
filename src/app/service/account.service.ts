import { Injectable } from '@angular/core';
import { APIConfig } from 'app/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  login(mobile, password) {
    let data = {
      mobile: mobile,
      password: password,
    };
    return this.http.put(APIConfig.HOST+APIConfig.PATH_LOGIN, data, { withCredentials: true });
  }

  signup(countryCode, mobile, code, password) {
    let data = {
      country_code: countryCode,
      mobile: mobile,
      code: code,
      password: password,
    };
    return this.http.post(APIConfig.HOST+APIConfig.PATH_SIGNUP, data, { withCredentials: true });
  }

  logout() {
    return this.http.delete(APIConfig.HOST+APIConfig.PATH_LOGOUT, { withCredentials: true });
  }

}
