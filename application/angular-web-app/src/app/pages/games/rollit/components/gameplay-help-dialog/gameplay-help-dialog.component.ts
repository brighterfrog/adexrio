import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameplay-help-dialog',
  templateUrl: './gameplay-help-dialog.component.html',
  styleUrls: ['./gameplay-help-dialog.component.scss']
})
export class GameplayHelpDialogComponent implements OnInit {

  disableAnimation = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {    
    setTimeout(() => this.disableAnimation = false);
  }

}
