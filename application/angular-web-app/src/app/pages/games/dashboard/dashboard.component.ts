import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ShellService } from 'src/app/services/shell.service';
import { GamesDashboardSummaryService } from './games-dashboard-summary.service';
import { APIService } from 'src/app/API.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  shellService: ShellService;
  gamesDashboardSummaryService: GamesDashboardSummaryService;

  totalPayouts: number;
  totalPlayers: number;
  totalGames: number;
  highestPayout: number;


  currentSyncTierName: string;

  constructor(
    shellService: ShellService,
    gamesDashboardSummaryService: GamesDashboardSummaryService,
    private apiService: APIService
   ) {
    this.shellService = shellService;
    this.gamesDashboardSummaryService = gamesDashboardSummaryService;

    shellService.headerTitle = 'dashboard';
    this.currentSyncTierName = environment.syncTierName;

    this.totalGames = 0;
    this.totalPayouts = 0;
    this.totalPlayers = 0;
    this.highestPayout = 0;

    this.initialize();
  }

  private initialize(): void {
    this.apiService.GetGamesSummary(0).then((data) => {
      this.totalGames = data.totalCompletedGames;
      this.totalPayouts = data.totalPayouts;
      this.totalPlayers = data.totalUniquePlayers;
      this.highestPayout = data.highestPayout;
    });

    this.apiService.OnUpdateGamesSummaryListener.subscribe((event: any) => {
      if (event) {
        this.highestPayout = event.value.data.onUpdateGamesSummary.highestPayout;
        this.totalGames = event.value.data.onUpdateGamesSummary.totalCompletedGames;
        this.totalPayouts = event.value.data.onUpdateGamesSummary.totalPayouts;
        this.totalPlayers = event.value.data.onUpdateGamesSummary.totalUniquePlayers;
      }
    });
  }
}
