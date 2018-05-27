import { Component, OnInit, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
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
  public searchTopics = [];

  constructor(public dialogRef: MatDialogRef<AskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
            private questionService:QuestionService, private cdRef:ChangeDetectorRef) { }

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
    this.topic = '';
    let length = this.data.topics.length;
    if(length==0) {
      this.topicholder = '添加话题';
    } else {
      this.topicholder = '添加话题（' + length + '/5）';
    }
  }

  onTopicInputChanged(v){
    if(v instanceof Object) {
      this.cdRef.detectChanges();
      this.topic = '';
      return;
    } else if ( v == '') {
      this.searchTopics = [];
      return;
    }
    this.questionService.FindTopics(v).subscribe(data=>this.onTopicSearchResult(data, v));
  }

  onTopicSearchResult(data, v){
    if(v != this.topic){
      return
    }
    this.searchTopics = data;
  }

  displayTopicOption(v){
    return v.name;
  }

  onOptionSelected(e){
    if(this.data.topics.length >= 5) {
      return;
    }
    let topic = e.option.value;
    for(let i in this.data.topics) {
      if(this.data.topics[i].id == topic.id){
        return;
      }
    }
    this.data.topics.push(topic);
    this.updateTopicHolder();
  }


  onInputDelete(e){
    if(this.topic == undefined || this.topic.length == 0) {
      this.data.topics.pop();
      this.updateTopicHolder();
    }
  }
}
