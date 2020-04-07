import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdapterComponent } from '../adaptability/adapter/adapter.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }
  ngOnInit(): void {

  }


  clickMe() {
    this.dialog.open(AdapterComponent, {
      autoFocus: true,
      disableClose: false,
      width: '500px',
      position: {
        top: '25px',
        left: '25px',


      }
    });
  }

}
