import { Component, OnInit, HostListener, ElementRef, Inject } from '@angular/core';
import { QuestionService } from 'app/service/question.service';
import { FileService } from 'app/service/file.service';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-hot-answer-feeds',
  templateUrl: './hot-answer-feeds.component.html',
  styleUrls: ['./hot-answer-feeds.component.scss']
})
export class HotAnswerFeedsComponent implements OnInit {

  constructor(private questionService: QuestionService, private fileService: FileService,
        @Inject(DOCUMENT) private document: any, el: ElementRef) {
    this.el = el.nativeElement;
  }

  public hotanswers = [];
  private el: HTMLElement;
  private loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.questionService.FindHotAnswers('').subscribe(data=>this.getHotAnswers(data));
  }

  getHotAnswers(data){
    for(let i in data){
      data[i].answer.user.avatar = this.fileService.GetFileURL(data[i].answer.user.avatar);
    }
    this.hotanswers = this.hotanswers.concat(data);
    this.loading = false;
  }

  @HostListener('window:scroll', [ ])
  onWindowScroll(){
    if(this.loading){
      return;
    }
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let last = this.hotanswers[this.hotanswers.length - 1];
    if(offset + window.screen.availHeight > this.el.offsetHeight) {
      this.loading = true;
      this.questionService.FindHotAnswers(last.ctime).subscribe(data=>this.getHotAnswers(data));
    }
    console.log(offset + window.screen.availHeight, this.el.offsetHeight);
  }
}
