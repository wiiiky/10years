import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upvote-button',
  templateUrl: './upvote-button.component.html',
  styleUrls: ['./upvote-button.component.scss']
})
export class UpvoteButtonComponent implements OnInit {

  private _count:number = 0;
  private _active:boolean = false;
  private _lineHeight:number = 30;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set count(v:number) {
    this._count = v;
  }

  public get count():number {
    return this._count;
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
