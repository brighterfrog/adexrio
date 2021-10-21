import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WagerConversionService {

    convertWeiToVET(value: number): number {
        return value / 1e18;
    }

    convertVETtoWei(amount: number): string {
        return '0x' + (amount * 1e18).toString(16);
    }
}
