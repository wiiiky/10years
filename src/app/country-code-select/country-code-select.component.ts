import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryCode, CountryCodeService } from './country-code.service';

@Component({
  selector: 'app-country-code-select',
  templateUrl: './country-code-select.component.html',
  styleUrls: ['./country-code-select.component.scss']
})
export class CountryCodeSelectComponent implements OnInit {

  @Output() onSelectValue = new EventEmitter<string>();

  codes: CountryCode[];
  value: string;

  constructor(private countryCodeService: CountryCodeService) { }

  ngOnInit() {
    this.countryCodeService.getSupportedCountryCodes().subscribe(codes=>{
      this.codes=codes;
      this.setValue(codes[0].value)
    });
  }

  onValueChanged(event) {
    this.setValue(event.value);
  }

  setValue(v: string) {
    this.value = v;
    this.onSelectValue.emit( this.value );
  }
}
