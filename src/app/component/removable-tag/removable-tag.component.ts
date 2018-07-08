import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-removable-tag',
  templateUrl: './removable-tag.component.html',
  styleUrls: ['./removable-tag.component.scss']
})

export class RemovableTagComponent {

  @Output() close = new EventEmitter<boolean>();

  @Input() name :string;
  @Input() link :string;
  @Input() removable: boolean = true;

  constructor() { }

  onCloseClick(){
    this.close.emit(true);
  }

}
