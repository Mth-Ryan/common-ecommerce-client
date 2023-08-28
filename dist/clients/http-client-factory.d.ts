import { HttpClient } from "./http-client";
type HttpClientCreateOptions = {
    authorize: boolean;
};
export declare class HttpClientFactory {
    private apiOrigin;
    private accessToken?;
    constructor(apiOrigin: string, accessToken: string);
    create(options?: HttpClientCreateOptions): HttpClient;
    private getAuthorization;
}
export {};
