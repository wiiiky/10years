import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit {

  private searchFocused :boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onSearchBlur(){
    this.searchFocused = false;
  }

  onSearchFocus(){
    this.searchFocused = true;
  }
}
