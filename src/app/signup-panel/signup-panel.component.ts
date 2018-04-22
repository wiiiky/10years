import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-panel',
  templateUrl: './signup-panel.component.html',
  styleUrls: ['./signup-panel.component.scss']
})
export class SignupPanelComponent implements OnInit {

  countryCode: string;
  number: string;
  code: string;

  constructor() { }

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
    console.debug(this.countryCode, this.number, this.code);
  }
}
