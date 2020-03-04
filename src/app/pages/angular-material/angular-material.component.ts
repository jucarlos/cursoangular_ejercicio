import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styles: []
})
export class AngularMaterialComponent implements OnInit {

  durationInSeconds = 2;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: this.durationInSeconds * 1000,
    });
  }


}
