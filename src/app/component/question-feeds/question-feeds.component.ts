import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-question-feeds',
  templateUrl: './question-feeds.component.html',
  styleUrls: ['./question-feeds.component.scss']
})
export class QuestionFeedsComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  public questions;

  ngOnInit() {
    this.questionService.FindHotQuestions().subscribe(data=>this.questions=data);
  }

}
