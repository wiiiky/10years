import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-panel',
  templateUrl: './signup-panel.component.html',
  styleUrls: ['./signup-panel.component.scss']
})
export class SignupPanelComponent implements OnInit {

  countryCode: string;
  number: string;
  code: string;

  constructor(private router: Router) { }

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
