import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material';
import { SMSService } from 'app/service/sms.service';


@Component({
  selector: 'app-phone-code-input',
  templateUrl: './phone-code-input.component.html',
  styleUrls: ['./phone-code-input.component.scss']
})


export class PhoneCodeInputComponent implements OnInit {

  @Output() onValueChanged = new EventEmitter<{countryCode:string,phoneNumber:string,code:string}>();

  formControl = new FormControl('', [
    Validators.required,
  ]);

  info = {
    countryCode: '',
    phoneNumber: '',
    code: '',
  };
  wait = 0;
  codeMessage :string = "获取短信验证码";

  constructor(private smsService:SMSService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  onCountryCodeChanged(v :string) {
    this.info.countryCode = v;
    this.onValueChanged.emit(this.info);
  }

  onNumberChanged(v :string) {
    this.info.phoneNumber= v;
    this.onValueChanged.emit(this.info);
  }

  onCodeChanged(v :string) {
    this.info.code = v;
    this.onValueChanged.emit(this.info);
  }

  onSendCode(e) {
    e.preventDefault();
    if(this.wait>0){
      return;
    }
    let phoneNumber = this.info.phoneNumber;
    if(phoneNumber.length != 11) {
      return;
    }
    this.smsService.SendSignupCode(phoneNumber).subscribe((data)=>{
      this.waitSend(data['wait']);
    }, (resp)=>{
      let err = resp.error;
      if(err.code == 1102) {
        this.snackBar.open('短时间内发送短信过多', '确认', {duration: 3000});
      }
    });
  }

  waitSend(w) {
    this.wait = w;
    if(w==0){
      this.codeMessage = '获取短信验证码';
      return;
    }
    this.codeMessage = w + '秒后重发';
    setTimeout(()=>{
      this.waitSend(w-1);
    }, 1000);
  }
};
