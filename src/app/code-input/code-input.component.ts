import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent implements OnInit {
  @Output() onValueChanged = new EventEmitter<string>();

  formControl = new FormControl('', [
    Validators.required,
  ]);
  code :string;
  codeMessage :string = "获取短信验证码";

  constructor() { }

  ngOnInit() {
  }

  onCodeChanged(v) {
    this.code = v;
    this.onValueChanged.emit(this.code);
  }

  sendCode(e) {
    e.stopPropagation();
    this.codeMessage = "重新获取短信验证码";
    console.log("123456");
  }
}
