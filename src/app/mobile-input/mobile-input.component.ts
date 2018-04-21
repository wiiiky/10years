import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.scss']
})


export class MobileInputComponent implements OnInit {

  @Output() onValueChanged = new EventEmitter<{countryCode:string,number:string}>();

  emailFormControl = new FormControl('', [
    Validators.required,
  ]);

  info = {
    countryCode: '',
    number: '',
  };

  constructor() { }

  ngOnInit() {
  }


  onCountryCodeChanged(v :string) {
    this.info.countryCode = v;
    this.onValueChanged.emit(this.info);
  }

  onNumberChanged(v :string) {
    this.info.number= v;
    this.onValueChanged.emit(this.info);
  }
};
