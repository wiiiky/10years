import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AccountService } from 'app/service/account.service';
import { APIConfig } from 'app/app.config'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public accessible :boolean = false;

  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit() {
    this.accountService.GetAccountInfo().subscribe(data=>this.accessible=true, err=>this.gotoLogin(err));
  }

  gotoLogin(err){
    let url = this.router.url;
    this.router.navigate(['/login'], { queryParams: { redirect: url }});
  }

}
