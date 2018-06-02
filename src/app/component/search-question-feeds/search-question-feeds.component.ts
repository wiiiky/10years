import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-search-question-feeds',
  templateUrl: './search-question-feeds.component.html',
  styleUrls: ['./search-question-feeds.component.scss']
})
export class SearchQuestionFeedsComponent implements OnInit {

  private _query: string;
  private page:number = 1;
  public data = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    //this.questionService.FindQuestions(this.query, this.page).subscribe(data=>this.onSearchQuestion(data));
  }

  onSearchQuestion(data){
    this.data = this.data.concat(data);
    this.page += 1;
  }

  @Input()
  public set query(v: string) {
    this._query = v;
    this.page = 1;
    this.data = [];
    this.questionService.FindQuestions(this.query, this.page).subscribe(data=>this.onSearchQuestion(data));
  }

  public get query():string {
    return this._query;
  }

}
