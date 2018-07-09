import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) { }

  public id :string;
  public data: any = {};
  public answers = [];

  ngOnInit() {
    this.route.params.subscribe(params => this.GetQuestion(params['id']));
  }

  GetQuestion(id){
    this.id = id;
    this.questionService.GetQuestionAnswers(id, 1).subscribe(data=>this.updateAnswers(data));
  }

  updateAnswers(data){
    this.answers = this.answers.concat(data);
    console.log(this.answers);
  }

}
