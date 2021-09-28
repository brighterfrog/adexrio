import { Component, OnInit } from '@angular/core';
import { ShellService } from 'src/app/services/shell.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  shellService: ShellService;

  constructor(shellService: ShellService) {
    this.shellService = shellService;
    this.shellService.headerTitle = 'admin';


  }

  ngOnInit(): void {
  }

}
