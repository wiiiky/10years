import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-title',
  templateUrl: './question-title.component.html',
  styleUrls: ['./question-title.component.scss']
})
export class QuestionTitleComponent implements OnInit {

  @Input() topics: object[] = [];
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
