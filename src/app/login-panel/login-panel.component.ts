import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from '../app.config'

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  number: string;
  password: string;

  constructor(private router :Router, private http: HttpClient, private snackBar: MatSnackBar) { }

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
    let data = {
      mobile: this.number,
      password: this.password,
    };
    console.debug(this.number, this.password);
    this.http.put(APIConfig.HOST+APIConfig.PATH_LOGIN, data, { withCredentials: true }).subscribe(
          data=>this.onSuccess(data), resp=>this.onError(resp));
  }

  onSuccess(data) {
    console.debug(data);
    this.router.navigate(['/'])
  }

  onError(resp) {
    console.log(this);
    console.debug(resp.error);
    let err = resp.error;
    if(err.code == 101) {
      this.snackBar.open("用户名密码错误", "确认", {
        duration: 3000,
      });
    }
  }
}
