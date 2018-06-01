import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'app/service/http.service';
import { APIConfig } from 'app/app.config'
import 'rxjs/add/operator/map'

export class CountryCode {
  value: string;
  viewValue: string;
}

@Injectable()
export class CountryCodeService {

  constructor(private http: HttpService) { }

  getSupportedCountryCodes(): Observable<CountryCode[]> {
    let url = APIConfig.HOST + APIConfig.PATH_SUPPORTED_COUNTRIES;
    return this.http.get(url).map(this.extractData);
  }

  private extractData(data) {
    let results = [];
    for (let v of data) {
        results.push({value:v.code,viewValue:v.name+' +' + v.code});
    }
    return results;
  }

}
