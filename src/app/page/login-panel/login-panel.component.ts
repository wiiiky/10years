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

  number: string = '';
  password: string = '';
  redirect: string = '';
  sub: any;

  constructor(private router :Router, private accountService: AccountService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.router.routerState.root.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.redirect = params['redirect'] || '/';
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
    this.accountService.Login(this.number, this.password).subscribe((data)=> this.onSuccess(data), (err)=>this.onError(err));
  }

  onSuccess(data) {
    console.debug(data);
    this.router.navigate([this.redirect]);
  }

  onError(resp) {
    let err = resp.error;
    console.debug('err', resp, resp.body);
    if(resp.error == undefined || resp.error == null){
      return;
    } else if(err.code == 101) {
      this.snackBar.open('用户名密码错误', '确认', {duration: 3000});
    } else if (err.code==100) {
      let snackBarRef = this.snackBar.open('用户不存在，请先注册', '确认', {duration:3000});
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/signup']);
      });
    }
  }
}
