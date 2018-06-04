import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { QuestionService } from 'app/service/question.service';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-hot-answer-card',
  templateUrl: './hot-answer-card.component.html',
  styleUrls: ['./hot-answer-card.component.scss']
})
export class HotAnswerCardComponent implements OnInit {

  @Input() data;
  public showFullContent: boolean = false;
  private el: HTMLElement;
  private originalOffsetTop:number = 0;

  constructor(private questionService :QuestionService, @Inject(DOCUMENT) private document: any, el: ElementRef) {
    this.el = el.nativeElement;
  }

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

  onShowContentButtonClick(){
    this.showFullContent = true;
    this.originalOffsetTop = $(window).scrollTop();
    console.log(this.originalOffsetTop);
  }

  onHideContentButtonClick(){
    this.showFullContent=false;
    console.log(this.originalOffsetTop);
    setTimeout(()=>{
      window.scrollTo({
        top: this.originalOffsetTop,
        behavior: 'instant',
      });
    });
  }

}
