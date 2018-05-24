import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material';
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

  constructor(private apiService: AccountService, private router: Router, private snackBar: MatSnackBar) { }

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
    this.apiService.signup(this.countryCode, this.number, this.code, '123456').subscribe((data)=>this.onSuccess(data), (resp)=>this.onError(resp));
  }

  onSuccess(data){
    this.router.navigate(['/']);
  }
  onError(resp){
    let err = resp.error;
    console.log(err);
    if(err.code == 104) {
      let snackBarRef = this.snackBar.open('手机号已经注册，请直接登录', '确认', {duration: 3000});
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }
}
