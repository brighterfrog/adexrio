import { APIService } from "../API";

export class GlobalErrorService {

    apiService: APIService;
    constructor(apiService: APIService) {
        this.apiService = apiService;
    }

    logError(error: any): void{
        this.apiService.CreateErrorLog({
            stackTrace: JSON.stringify(error)
        })
    }

}