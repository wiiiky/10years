import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
  styleUrls: ['./search-question-card.component.scss']
})
export class SearchQuestionCardComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
