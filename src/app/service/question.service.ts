import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'app/app.config'

@Injectable()
export class QuestionService {

  constructor(private http:HttpClient) { }

  FindHotAnswers(before='', limit = 10) {
    let url = APIConfig.HOST + APIConfig.PATH_HOME_HOT_ANSWERS + "?before="+encodeURIComponent(before) + "&limit=" + limit;
    return this.http.get(url, { withCredentials: true});
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
    let url = APIConfig.HOST + APIConfig.PATH_TOPICS + "?query=" + q;
    return this.http.get(url, { withCredentials: true });
  }

  CreateQuestion(title, topics, content) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION;
    let data = {
      title: title,
      topics: topics,
      content: content,
    };
    return this.http.post(url, data, { withCredentials: true });
  }

  GetQuestion(id) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION + "/" + id;
    return this.http.get(url, { withCredentials: true });
  }

  GetQuestionAnswers(id, page, limit=10) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION_ANSWERS.replace(":questionID", id) + "?page=" + page + "&limit=" + limit;
    return this.http.get(url, { withCredentials: true });
  }
}
