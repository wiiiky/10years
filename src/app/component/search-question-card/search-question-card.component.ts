import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
  styleUrls: ['./search-question-card.component.scss']
})
export class SearchQuestionCardComponent implements OnInit {

  @Input() data;
  public showFullContent: boolean = false;

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
  }

  onUpvoteButtonClicked() {
    if(!this.data.user_answer_relationship.upvoted){
      this.questionService.UpvoteAnswer(this.data.answer.id).subscribe(data=>this.onUpvote(data))
    } else {
      this.questionService.UndoUpvoteAnswer(this.data.answer.id).subscribe(data=>this.onUndoUpvote(data));
    }
  }

  onUpvote(data){
    this.data.user_answer_relationship.upvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.user_answer_relationship.downvoted = false;
  }

  onUndoUpvote(data) {
    this.data.user_answer_relationship.upvoted = false;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
  }

  onDownvoteButtonClicked() {
    if(!this.data.user_answer_relationship.downvoted){
      this.questionService.DownvoteAnswer(this.data.answer.id).subscribe(data=>this.onDownvote(data))
    } else{
      this.questionService.UndoDownvoteAnswer(this.data.answer.id).subscribe(data=>this.onUndoDownvote(data));
    }
  }

  onDownvote(data){
    this.data.user_answer_relationship.downvoted = true;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
    this.data.user_answer_relationship.upvoted = false;
  }

  onUndoDownvote(data){
    this.data.user_answer_relationship.downvoted = false;
    this.data.answer.upvote_count = data.upvote_count;
    this.data.answer.downvote_count = data.downvote_count;
  }
}
