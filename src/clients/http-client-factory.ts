import { FetchHttpClient } from "./fetch-http-client";
import { HttpClient } from "./http-client";

type HttpClientCreateOptions = {
    authorize: boolean;
}

export class HttpClientFactory {
    private apiOrigin: string;
    private accessToken?: string;

    constructor(apiOrigin: string, accessToken: string) {
        this.apiOrigin = apiOrigin;
        accessToken = accessToken;
    }

    public create(options?: HttpClientCreateOptions): HttpClient {
        return options?.authorize ?
            new FetchHttpClient(this.apiOrigin, this.getAuthorization()) :
            new FetchHttpClient(this.apiOrigin);
    }

    private getAuthorization() {
        return `Bearer ${this.accessToken}`;
    }
}
