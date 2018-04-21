import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


export class CountryCode {
  value: string;
  viewValue: string;
}

@Injectable()
export class CountryCodeService {

  constructor() { }


  supportedCountryCodes: CountryCode[] = [
    { value: '86', viewValue: '中国 +86'},
    { value: '1', viewValue: '美国 +1'},
    { value: '81', viewValue: '日本 +81'},
  ];

  getSupportedCountryCodes(): Observable<CountryCode[]> {
    return of(this.supportedCountryCodes);
  }

}
