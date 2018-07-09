import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-question-header',
  templateUrl: './question-header.component.html',
  styleUrls: ['./question-header.component.scss']
})
export class QuestionHeaderComponent implements OnInit {

  @Input() id: string;
  public data: object = {};

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.GetQuestion(this.id).subscribe(data=>this.data=data);
  }

  onFollowQuestion() {
    this.questionService.FollowQuestion(this.id).subscribe();
  }

  onAnswerQuestion() {

  }

}
