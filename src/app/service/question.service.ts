import { Injectable } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { APIConfig } from 'app/app.config'

@Injectable()
export class QuestionService {

  constructor(private http:HttpService) { }

  FindHotAnswers(before='', limit = 10) {
    let url = APIConfig.HOST + APIConfig.PATH_HOME_HOT_ANSWERS + "?before="+encodeURIComponent(before) + "&limit=" + limit;
    return this.http.get(url);
  }

  UpvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_UPVOTE.replace(":answerID", answerID);
    return this.http.post(url, null);
  }

  DownvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_DOWNVOTE.replace(":answerID", answerID);
    return this.http.post(url, null);
  }

  UndoUpvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_UPVOTE.replace(":answerID", answerID);
    return this.http.delete(url);
  }

  UndoDownvoteAnswer(answerID) {
    let url = APIConfig.HOST + APIConfig.PATH_ANSWER_DOWNVOTE.replace(":answerID", answerID);
    return this.http.delete(url);
  }

  FindTopics(q) {
    let url = APIConfig.HOST + APIConfig.PATH_TOPICS + "?query=" + q;
    return this.http.get(url);
  }

  CreateQuestion(title, topics, content) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION;
    let data = {
      title: title,
      topics: topics,
      content: content,
    };
    return this.http.post(url, data);
  }

  GetQuestion(id) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION + "/" + id;
    return this.http.get(url);
  }

  FindQuestions(q, page=1, limit = 10) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTIONS + "?query=" + encodeURIComponent(q) + "&page=" + page + "&limit=" + limit;
    return this.http.get(url);
  }

  GetQuestionAnswers(id, page, limit=10) {
    let url = APIConfig.HOST + APIConfig.PATH_QUESTION_ANSWERS.replace(":questionID", id) + "?page=" + page + "&limit=" + limit;
    return this.http.get(url);
  }
}
