import { Component, OnInit, ChangeDetectorRef, forwardRef } from '@angular/core';
import { QuestionService } from 'app/service/question.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const TOPIC_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TopicInputComponent),
    multi: true
};

const noop = () => {
};

@Component({
  selector: 'app-topic-input',
  templateUrl: './topic-input.component.html',
  styleUrls: ['./topic-input.component.scss'],
  providers: [TOPIC_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class TopicInputComponent implements OnInit {

  public topicholder: string;
  public topic: string;
  public searchTopics = [];
  public topics = [];
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private questionService:QuestionService, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.updateTopicHolder();
  }

  //From ControlValueAccessor interface
  writeValue(value: string[]) {
    if(value){
      this.topics = value;
      this.updateTopicHolder();
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onTagRemoved(id){
    let topics = [];
    for(let i in this.topics){
      if(this.topics[i].id == id){
        continue
      }
      topics.push(this.topics[i]);
    }
    this.topics = topics;
    this.updateTopicHolder();
  }

  updateTopicHolder() {
    this.topic = '';
    let length = this.topics.length;
    if(length==0) {
      this.topicholder = '添加话题';
    } else {
      this.topicholder = '添加话题（' + length + '/5）';
    }
    this.onChangeCallback(this.topics);
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
    if(this.topics.length >= 5) {
      return;
    }
    let topic = e.option.value;
    for(let i in this.topics) {
      if(this.topics[i].id == topic.id){
        return;
      }
    }
    this.topics.push(topic);
    this.updateTopicHolder();
  }


  onInputDelete(e){
    if(this.topic == undefined || this.topic.length == 0) {
      this.topics.pop();
      this.updateTopicHolder();
    }
  }
}
