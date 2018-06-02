import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-downvote-button',
  templateUrl: './downvote-button.component.html',
  styleUrls: ['./downvote-button.component.scss']
})
export class DownvoteButtonComponent implements OnInit {

  private _active:boolean = false;
  private _lineHeight:number = 30;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set active(v:boolean) {
    this._active =v;
  }

  public get active():boolean {
    return this._active;
  }

  @Input()
  public set lineHeight(v:number){
    this._lineHeight = v;
  }

  public get lineHeight():number {
    return this._lineHeight;
  }
}
