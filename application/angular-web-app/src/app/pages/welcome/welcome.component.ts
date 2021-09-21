import { Component, OnInit } from '@angular/core';
import { ShellService } from 'src/app/services/shell.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  shellService: ShellService;

  constructor(shellService: ShellService) {
    this.shellService = shellService;
    this.shellService.headerTitle = 'welcome';
  }

  ngOnInit(): void {
  }

}
