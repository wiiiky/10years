import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from '../app.config'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private loggedin :boolean = false;
  private searchFocused :string = '';

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get(APIConfig.HOST + APIConfig.PATH_USER_INFO,{ withCredentials: true }).subscribe(
      data=>this.loggedin=true,
      err=>this.router.navigate(['/login']));
  }

  onSearchBlur(){
    this.searchFocused = '';
  }

  onSearchFocus(){
    this.searchFocused = 'focused';
  }
}
