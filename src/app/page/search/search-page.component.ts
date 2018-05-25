import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public q :string;

  ngOnInit() {
    this.route.queryParams.subscribe(params=>this.q=params['q']);
  }

}
