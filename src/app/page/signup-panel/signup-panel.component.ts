import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/service/account.service';

@Component({
  selector: 'app-signup-panel',
  templateUrl: './signup-panel.component.html',
  styleUrls: ['./signup-panel.component.scss']
})
export class SignupPanelComponent implements OnInit {

  countryCode: string;
  number: string;
  code: string;

  constructor(private apiService: AccountService, private router: Router) { }

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
    this.apiService.signup(this.countryCode, this.number, this.code, '123456').subscribe((data)=>this.onSuccess(data), (err)=>this.onError(err));
  }

  onSuccess(data){
    this.router.navigate(['/']);
  }
  onError(err){
    console.log(err.error);
  }
}
