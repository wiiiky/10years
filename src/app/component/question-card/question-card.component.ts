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
    this.data.topic = this.data.topics[0];
  }

}
