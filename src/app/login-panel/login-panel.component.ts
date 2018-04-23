import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  countryCode: string;
  number: string;
  password: string;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onMobileChanged(v) {
    this.countryCode = v.countryCode;
    this.number = v.number;
  }

  onPasswordChanged(v) {
    this.password = v;
  }

  onLogin() {
    console.debug(this.countryCode, this.number, this.password);
    this.router.navigate(['/signup']);
  }
}
