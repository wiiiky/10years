import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from 'app/app.config'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public accessible :boolean = false;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get(APIConfig.HOST + APIConfig.PATH_ACCOUNT_INFO,{ withCredentials: true }).subscribe(
      data=>this.accessible=true,
      err=>this.gotoLogin(err));
  }

  gotoLogin(err){
    let url = this.router.url;
    this.router.navigate(['/login'], { queryParams: { redirect: url }});
  }

}
