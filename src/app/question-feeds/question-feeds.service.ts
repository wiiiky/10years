import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from '../app.config'
import { Observable } from 'rxjs';

@Injectable()
export class QuestionFeedsService {

  constructor(private http: HttpClient) { }

  GetQuestions() {
    var url :string = APIConfig.HOST + APIConfig.PATH_QUESTIONES;
    return this.http.get(url, { withCredentials: true });
  }
}
