import { Injectable } from '@angular/core';
import { APIConfig } from 'app/app.config';
import { HttpService } from 'app/service/http.service';

@Injectable()
export class AccountService {

  constructor(private http: HttpService) { }

  GetAccountInfo() {
    return this.http.get(APIConfig.HOST + APIConfig.PATH_ACCOUNT_INFO);
  }

  Login(mobile, password) {
    let data = {
      mobile: mobile,
      password: password,
    };
    return this.http.put(APIConfig.HOST+APIConfig.PATH_LOGIN, data);
  }

  Signup(countryCode, mobile, code, password) {
    let data = {
      country_code: countryCode,
      mobile: mobile,
      code: code,
      password: password,
    };
    return this.http.post(APIConfig.HOST+APIConfig.PATH_SIGNUP, data);
  }

  Logout() {
    return this.http.delete(APIConfig.HOST+APIConfig.PATH_LOGOUT);
  }

}
