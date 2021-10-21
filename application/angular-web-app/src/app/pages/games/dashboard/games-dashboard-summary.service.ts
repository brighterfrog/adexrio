import { Injectable } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Injectable({
  providedIn: 'root'
})
export class GamesDashboardSummaryService {

  constructor(awsApi: APIService) {

  }
}
