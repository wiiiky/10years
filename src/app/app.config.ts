import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

export class APIConfig {
  static HOST:string;
  static DEV_HOST = "http://127.0.0.1:1323/api";
  static PROD_HOST = "https://10.wikylyu.xyz/api";
  static PATH_SUPPORTED_COUNTRIES = "/supported_countries";
  static PATH_ACCOUNT_INFO = "/account";
  static PATH_SIGNUP = "/account";
  static PATH_LOGIN = "/account/token";
  static PATH_LOGOUT = "/account/token";
  static PATH_HOME_HOT_ANSWERS = "/home/hot/answers";
  static PATH_FILE = "/file";
  static PATH_SELF_PROFILE = "/user/profile";
  static PATH_USER_COVER = "/user/cover";
}

if (environment.production) {
  APIConfig.HOST = APIConfig.PROD_HOST;
} else {
  APIConfig.HOST = APIConfig.DEV_HOST;
}
