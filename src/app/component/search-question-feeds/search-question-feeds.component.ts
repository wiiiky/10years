import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-search-question-feeds',
  templateUrl: './search-question-feeds.component.html',
  styleUrls: ['./search-question-feeds.component.scss']
})
export class SearchQuestionFeedsComponent implements OnInit {

  @Input() query: string;
  private page:number = 1;
  public data = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.FindQuestions(this.query, this.page).subscribe(data=>this.onSearchQuestion(data));
  }

  onSearchQuestion(data){
    this.data = this.data.concat(data);
    this.page += 1;
  }

}
