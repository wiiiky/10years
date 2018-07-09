import { isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

export class APIConfig {
  static HOST:string;
  static SOURCE:string;
  static DEV_HOST = "http://127.0.0.1:1323/api";
  static PROD_HOST = "https://10.wikylyu.xyz/api";
  static DEV_SOURCE = '137ff912-7106-11e8-9430-bb0f063260f6';
  static PROD_SOURCE = '137ff912-7106-11e8-9430-bb0f063260f6';
  static PATH_SUPPORTED_COUNTRIES = "/supported_countries";
  static PATH_ACCOUNT_INFO = "/account";
  static PATH_SIGNUP = "/account";
  static PATH_LOGIN = "/account/token";
  static PATH_LOGOUT = "/account/token";
  static PATH_HOME_HOT_ANSWERS = "/home/hot/answers";
  static PATH_FILE = "/file";
  static PATH_SELF_PROFILE = "/user/profile";
  static PATH_USER_COVER = "/user/cover";
  static PATH_ANSWER_UPVOTE = "/answer/:answerID/upvote";
  static PATH_ANSWER_DOWNVOTE = "/answer/:answerID/downvote";
  static PATH_TOPICS = "/topics";
  static PATH_QUESTION = "/question";
  static PATH_QUESTIONS = "/questions";
  static PATH_QUESTION_ANSWERS = "/question/:questionID/answers";
  static PATH_QUESTION_FOLLOW = "/question/:questionID/follow";
}

if (environment.production) {
  APIConfig.HOST = APIConfig.PROD_HOST;
  APIConfig.SOURCE = APIConfig.PROD_SOURCE;
} else {
  APIConfig.HOST = APIConfig.DEV_HOST;
  APIConfig.SOURCE = APIConfig.DEV_SOURCE;
}
