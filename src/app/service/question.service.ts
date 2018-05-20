import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'app/app.config'

@Injectable()
export class QuestionService {

  constructor(private http:HttpClient) { }

  FindHotAnswers(page, limit = 10) {
    let url = APIConfig.HOST + APIConfig.PATH_HOME_HOT_ANSWERS;
    return this.http.get(url, { withCredentials: true });
  }

}
