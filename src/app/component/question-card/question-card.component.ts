import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

  onUpvote() {
    this.data.relationship.upvoted = !this.data.relationship.upvoted;
    this.data.relationship.downvoted = false;
  }

  onDownvote() {
    this.data.relationship.downvoted = !this.data.relationship.downvoted;
    this.data.relationship.upvoted = false;
  }

}
