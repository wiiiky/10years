import { Component, OnInit, HostListener, Input, ElementRef, Inject } from '@angular/core';
import { QuestionService } from 'app/service/question.service';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-search-question-feeds',
  templateUrl: './search-question-feeds.component.html',
  styleUrls: ['./search-question-feeds.component.scss']
})
export class SearchQuestionFeedsComponent implements OnInit {

  private _query: string;
  private page:number = 1;
  public data = [];
  public loading = false;
  public ended = false;
  private el: HTMLElement;

  constructor(private questionService: QuestionService, @Inject(DOCUMENT) private document: any, el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    //this.questionService.FindQuestions(this.query, this.page).subscribe(data=>this.onSearchQuestion(data));
  }

  onSearchQuestion(data){
    if(data.length == 0) {
      this.ended = true;
    }
    this.data = this.data.concat(data);
    this.loading = false;
    this.page += 1;
  }

  @Input()
  public set query(v: string) {
    this._query = v;
    this.page = 1;
    this.data = [];
    this.ended = false;
    this.loadMore();
  }

  public get query():string {
    return this._query;
  }

  loadMore() {
    this.loading = true;
    this.questionService.FindQuestions(this.query, this.page).subscribe(data=>this.onSearchQuestion(data));
  }

  @HostListener('window:scroll', [ ])
  onWindowScroll(){
    if(this.loading||this.ended){
      return;
    }
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset + window.screen.availHeight > this.el.offsetHeight-200) {
      this.loadMore();
    }
    console.log(offset + window.screen.availHeight, this.el.offsetHeight);
  }

}
