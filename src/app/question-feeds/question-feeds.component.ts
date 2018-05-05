import { Component, OnInit } from '@angular/core';
import { QuestionFeedsService } from './question-feeds.service';

@Component({
  selector: 'app-question-feeds',
  templateUrl: './question-feeds.component.html',
  styleUrls: ['./question-feeds.component.scss']
})
export class QuestionFeedsComponent implements OnInit {

  constructor(private questionFeedsService: QuestionFeedsService) { }

  private questions;

  ngOnInit() {
    this.questionFeedsService.GetQuestions().subscribe(data=>this.questions=data);
  }

}
