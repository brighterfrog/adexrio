import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DateConversionService {

    multiplier = 1000;

    convertContractDateToReadable(epoch: number): string {
        const date = new Date(epoch * this.multiplier);
        return date.toString();
    }
}
