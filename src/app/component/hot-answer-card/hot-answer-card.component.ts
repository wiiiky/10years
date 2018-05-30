import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-hot-answer-card',
  templateUrl: './hot-answer-card.component.html',
  styleUrls: ['./hot-answer-card.component.scss']
})
export class HotAnswerCardComponent implements OnInit {

  @Input() data;

  constructor(private questionService :QuestionService) { }

  ngOnInit() {
  }

  onUpvoteButtonClicked() {
    if(!this.data.relationship.upvoted){
      this.questionService.UpvoteAnswer(this.data.answer.id).subscribe(data=>this.onUpvote(data))
    } else {
      this.questionService.UndoUpvoteAnswer(this.data.answer.id).subscribe(data=>this.onUndoUpvote(data));
    }
  }

  onUpvote(data){
    this.data.relationship.upvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.relationship.downvoted = false;
  }

  onUndoUpvote(data) {
    this.data.relationship.upvoted = false;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
  }

  onDownvoteButtonClicked() {
    if(!this.data.relationship.downvoted){
      this.questionService.DownvoteAnswer(this.data.answer.id).subscribe(data=>this.onDownvote(data))
    } else{
      this.questionService.UndoDownvoteAnswer(this.data.answer.id).subscribe(data=>this.onUndoDownvote(data));
    }
  }

  onDownvote(data){
    this.data.relationship.downvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.relationship.upvoted = false;
  }

  onUndoDownvote(data){
    this.data.relationship.downvoted = false;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
  }

}
