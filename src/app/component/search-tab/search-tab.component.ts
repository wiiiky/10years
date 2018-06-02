import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss']
})
export class SearchTabComponent implements OnInit {

  public _query:string;

  constructor(private router: Router) {  }

  ngOnInit() {
  }

  @Input()
  public set query(v: string) {
    this._query = v;
  }

  public get query(): string {
    return this._query;
  }
}
