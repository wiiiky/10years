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
  }

  constructor(public dialogRef: MatDialogRef<AskDialogComponent>, private questionService:QuestionService) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data);
  }

  ngOnInit(){
  }
}
