import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-question-header',
  templateUrl: './question-header.component.html',
  styleUrls: ['./question-header.component.scss']
})
export class QuestionHeaderComponent implements OnInit {

  @Input() id: string;
  public data: any = null;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.GetQuestion(this.id).subscribe(data=>this.data=data);
  }

  onFollowQuestion() {
    this.questionService.FollowQuestion(this.id).subscribe((data)=>this.onFollowChanged(data));
  }

  onUnfollowQuestion() {
    this.questionService.UnfollowQuestion(this.id).subscribe((data)=>this.onFollowChanged(data))
  }

  onFollowChanged(data) {
    console.log(this.data, data);
    this.data.user_question_relationship.followed = data.followed;
    this.data.follow_count = data.follow_count;
  }

  onAnswerQuestion() {

  }

}
