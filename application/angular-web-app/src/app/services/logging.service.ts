import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private apiService: APIService) { }

  writeDebug(message: any): void {
    if (environment.showDebug) {
      console.log(message);
    }
  }
}
