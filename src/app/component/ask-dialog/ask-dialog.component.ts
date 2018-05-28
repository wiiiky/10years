import { Component, OnInit, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuestionService } from 'app/service/question.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-ask-dialog',
  templateUrl: './ask-dialog.component.html',
  styleUrls: ['./ask-dialog.component.scss']
})

export class AskDialogComponent {

  public data = {
    title: '',
    topics: [],
    content: '',
  }

  public froalaOptions = {
    placeholderText: '问题背景、条件等详细信息',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic', '|', 'quote', 'formatOL', 'formatUL', '|', 'insertLink', 'insertImage', 'insertVideo', '|', 'clearFormatting'],
    heightMin: 78,
    pluginsEnabled: ['align','charCounter','codeBeautifier','codeView','colors','draggable','embedly','emoticons','entities','file','fontFamily','fontSize','image','imageManager','inlineStyle','lineBreaker','link','lists','paragraphFormat','paragraphStyle','quote','save','table','url','video','wordPaste']
  }

  constructor(private router: Router, public dialogRef: MatDialogRef<AskDialogComponent>, private questionService:QuestionService) { }

  submitQuestion(): void {
    let title = this.data.title;
    let topics = [];
    let content = this.data.content;
    for(let i in this.data.topics) {
      topics.push(this.data.topics[i].id);
    }
    if(title == '') {
      return;
    } else if(topics.length == 0){
      return;
    }
    this.questionService.CreateQuestion(title, topics, content).subscribe((data)=>this.onQuestionCreated(data), resp=>this.onQuestionFailed(resp));
  }

  onQuestionCreated(data){
    console.log(data);
    this.router.navigate(['/question', data.id]);
    this.dialogRef.close();
  }

  onQuestionFailed(resp) {
    console.error(resp);
  }

  ngOnInit(){
  }
}
