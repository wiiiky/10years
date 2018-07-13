import { Injectable } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { APIConfig } from 'app/app.config'

@Injectable()
export class SMSService {

  constructor(private http:HttpService) { }

  SendSignupCode(phoneNumber) {
    let url = APIConfig.HOST + APIConfig.PATH_SMS_SIGNUP;
    let data = {
      phone_number: phoneNumber,
    };
    return this.http.post(url, data);
  }

}
