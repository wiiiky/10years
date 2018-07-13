import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
  password: string;

  formControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private apiService: AccountService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onPhoneCodeChanged(v) {
    this.countryCode = v.countryCode;
    this.number = v.phoneNumber;
    this.code = v.code;
  }


  onSignup() {
    if(this.number.length!=11){
      return;
    } else if(this.code.length==0){
      return;
    } else if(this.password.length==0){
      return;
    }
    this.apiService.Signup(this.countryCode, this.number, this.code, this.password).subscribe((data)=>this.onSuccess(data), (resp)=>this.onError(resp));
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
