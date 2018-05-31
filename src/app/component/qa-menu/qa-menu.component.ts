import { Component, OnInit } from '@angular/core';
import { AskDialogComponent } from 'app/component/ask-dialog/ask-dialog.component';
import { MatDialog } from '@angular/material';
/*
 * QA = Question & Answer
 */

@Component({
  selector: 'app-qa-menu',
  templateUrl: './qa-menu.component.html',
  styleUrls: ['./qa-menu.component.scss']
})
export class QaMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAskClicked(){
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
