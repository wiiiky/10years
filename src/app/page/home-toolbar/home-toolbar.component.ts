import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { AccountService } from 'app/service/account.service';
import { AskDialogComponent } from 'app/component/ask-dialog/ask-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit {

  public searchFocused :boolean = false;
  public query :string = '';

  constructor(private router: Router, private accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit() {
  }


  onSearchBlur(){
    this.searchFocused = false;
  }

  onSearchFocus(){
    this.searchFocused = true;
  }

  onLogout() {
    this.accountService.Logout().subscribe(data=>this.onSuccess());
  }

  onSuccess() {
    this.router.navigate(['/login']);
  }

  onSearchClicked() {
    if(this.query.length == 0){
      return;
    }
    this.router.navigate(['/search'], {queryParams:{query:this.query}});
  }

  onAskClicked() {
    let data = {
      title: '',
      topics: [],
    }
    let dialogRef = this.dialog.open(AskDialogComponent, {
      width: '595px',
      data: data,
    });
  }
}
