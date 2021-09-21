
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { BinanceTickerRequest, BinanceTickerResponse } from './rollit_models';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class BinanceApiService {
    // priceTickerDataChanged: Subject<BinanceTickerResponse>;
    httpClient: HttpClient;
    binanceTickerResponseResult: BinanceTickerResponse;
    vetPriceLoader: Subscription;

    binanceResponse: Subject<BinanceTickerResponse>;

    constructor(
        httpClient: HttpClient
    ) {
        this.httpClient = httpClient;
        // this.priceTickerDataChanged = new Subject<BinanceTickerResponse>();
        this.vetPriceLoader = timer(0, 1000)
            .subscribe((item) => this.getAndUpdateVetPrice());

        this.binanceTickerResponseResult = new BinanceTickerResponse(0);
        this.binanceResponse = new Subject<BinanceTickerResponse>();
    }

    getAndUpdateVetPrice(): void {

        this.httpClient.get<BinanceTickerResponse>(new BinanceTickerRequest().Build())
            .subscribe((response) => {
                this.binanceTickerResponseResult = response;
                this.binanceResponse.next(response);
            });
    }
}


