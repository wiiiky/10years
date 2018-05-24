import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() data;

  constructor(private questionService :QuestionService) { }

  ngOnInit() {
  }

  onUpvoteButtonClicked() {
    if(!this.data.relationship.upvoted){
      this.questionService.UpvoteAnswer(this.data.answer.id).subscribe(data=>this.onUpvote(data))
    }
  }

  onUpvote(data){
    this.data.relationship.upvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.relationship.downvoted = false;
  }

  onDownvoteButtonClicked() {
    if(!this.data.relationship.downvoted){
      this.questionService.DownvoteAnswer(this.data.answer.id).subscribe(data=>this.onDownvote(data))
    }
  }

  onDownvote(data){
    this.data.relationship.downvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.relationship.upvoted = false;
  }

}
