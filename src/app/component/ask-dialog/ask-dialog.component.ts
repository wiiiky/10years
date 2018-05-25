import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuestionService } from 'app/service/question.service';

@Component({
  selector: 'app-ask-dialog',
  templateUrl: './ask-dialog.component.html',
  styleUrls: ['./ask-dialog.component.scss']
})

export class AskDialogComponent {

  public topicholder: string;
  public topic: string;
  public searchTopics;

  constructor(public dialogRef: MatDialogRef<AskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
            private questionService:QuestionService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){
    this.updateTopicHolder();
  }

  onTagRemoved(id){
    let topics = [];
    for(let i in this.data.topics){
      if(this.data.topics[i].id == id){
        continue
      }
      topics.push(this.data.topics[i]);
    }
    this.data.topics = topics;
    this.updateTopicHolder();
  }

  updateTopicHolder() {
    let length = this.data.topics.length;
    if(length==0) {
      this.topicholder = '添加话题';
    } else {
      this.topicholder = '添加话题（' + length + '/5）';
    }
  }

  onTopicInputChanged(e){
    this.questionService.FindTopics(e).subscribe(data=>this.searchTopics=data);
  }

  onOptionClick(e, topic){
    e.stopPropagation();
    this.topic = '';
    for(let i in this.data.topics) {
      if(this.data.topics[i].id == topic.id){
        return;
      }
    }
    this.data.topics.push(topic);
    this.updateTopicHolder();
  }
}
