import { Component, OnInit, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuestionService } from 'app/service/question.service';

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

  constructor(public dialogRef: MatDialogRef<AskDialogComponent>, private questionService:QuestionService) { }

  submitQuestion(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  ngOnInit(){
  }
}
