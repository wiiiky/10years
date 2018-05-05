import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIConfig } from './app.config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient,private router: Router){}
}
