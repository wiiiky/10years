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

  UpvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_UPVOTE.replace(":answerID", answerID);
    return this.http.post(url, null, { withCredentials: true });
  }

  DownvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_DOWNVOTE.replace(":answerID", answerID);
    return this.http.post(url, null, { withCredentials: true });
  }

  UndoUpvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_UPVOTE.replace(":answerID", answerID);
    return this.http.delete(url, { withCredentials: true });
  }

  UndoDownvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_DOWNVOTE.replace(":answerID", answerID);
    return this.http.delete(url, { withCredentials: true });
  }

  FindTopics(q) {
    let url = APIConfig.HOST + APIConfig.PATH_TOPICS + "?q=" + q;
    return this.http.get(url, { withCredentials: true });
  }
}
