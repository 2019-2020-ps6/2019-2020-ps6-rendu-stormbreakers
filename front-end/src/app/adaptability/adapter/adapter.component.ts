import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.css']
})
export class AdapterComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AdapterComponent>, @Inject(MAT_DIALOG_DATA) public  data: any) { }

  ngOnInit() {
  }

  public  closeMe() {
    this.dialogRef.close();
}



}
