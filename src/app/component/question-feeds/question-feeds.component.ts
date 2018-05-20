import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/service/question.service';
import { FileService } from 'app/service/file.service';

@Component({
  selector: 'app-question-feeds',
  templateUrl: './question-feeds.component.html',
  styleUrls: ['./question-feeds.component.scss']
})
export class QuestionFeedsComponent implements OnInit {

  constructor(private questionService: QuestionService, private fileService: FileService) { }

  public hotanswers;

  ngOnInit() {
    this.questionService.FindHotAnswers(1).subscribe(data=>this.getHotAnswers(data));
  }

  getHotAnswers(data){
    for(let i in data){
      let d = data[i];
      d.answer.user.avatar = this.fileService.GetFileURL(d.answer.user.avatar);
    }
    this.hotanswers = data;
  }

}
