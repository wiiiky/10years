import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'app/app.config'

@Injectable()
export class QuestionService {

  constructor(private http:HttpClient) { }

  FindHotQuestions() {
    var url :string = APIConfig.HOST + APIConfig.PATH_QUESTIONES;
    return this.http.get(url, { withCredentials: true });
  }

}
