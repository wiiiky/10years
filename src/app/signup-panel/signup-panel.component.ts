import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from '../app.config'

@Component({
  selector: 'app-signup-panel',
  templateUrl: './signup-panel.component.html',
  styleUrls: ['./signup-panel.component.scss']
})
export class SignupPanelComponent implements OnInit {

  countryCode: string;
  number: string;
  code: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onMobileChanged(v) {
    this.countryCode = v.countryCode;
    this.number = v.number;
  }

  onCodeChanged(v) {
    this.code = v;
  }

  onSignup() {
    if(this.number.length!=11){
      return;
    }
    if(this.code.length==0){
      return;
    }
    console.debug(this.countryCode, this.number, this.code);
    let data = {
      country_code: this.countryCode,
      mobile: this.number,
      code: this.code,
      password: '123456',
    };
    this.http.post(APIConfig.HOST+APIConfig.PATH_SIGNUP, data, { withCredentials: true }).subscribe(
      data=>this.router.navigate(['/']),
      err=>console.error(err));
  }
}
