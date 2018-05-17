import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material';
import { AccountService } from 'app/service/account.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  number: string;
  password: string;

  constructor(private router :Router, private accountService: AccountService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onNumberChanged(v) {
    this.number = v;
  }

  onPasswordChanged(v) {
    this.password = v;
  }

  onLogin() {
    if(this.number.length!=11){
      this.snackBar.open("手机号长度不对", "确认", {
        duration: 3000,
      });
      return;
    }
    if(this.password.length==0){
      return;
    }
    console.debug(this.number, this.password);
    this.accountService.login(this.number, this.password).subscribe((data)=> this.onSuccess(data), (err)=>this.onError(err));
  }

  onSuccess(data) {
    console.debug(data);
    this.router.navigate(['/'])
  }

  onError(resp) {
    console.debug(resp.error);
    let err = resp.error;
    if(err.code == 101) {
      this.snackBar.open('用户名密码错误', '确认', {duration: 3000});
    } else if (err.code==100) {
      this.snackBar.open('用户不存在，请先注册', '确认', {duration:3000});
    }
  }
}
