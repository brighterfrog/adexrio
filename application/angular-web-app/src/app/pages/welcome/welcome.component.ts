import { Component, OnInit } from '@angular/core';
import { ShellService } from 'src/app/services/shell.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  shellService: ShellService;
  version: string;

  constructor(shellService: ShellService) {
    this.shellService = shellService;
    this.shellService.headerTitle = 'welcome';
    this.version = environment.version;
  }

  ngOnInit(): void {
  }

}
