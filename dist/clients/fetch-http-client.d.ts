import { HttpClient, RequestOptions } from "./http-client";
export declare class FetchHttpClient extends HttpClient {
    private getOptions;
    get(route: string, options?: RequestOptions): Promise<Response>;
    post(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    put(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    patch(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    delete(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    filePost(route: string, data: File, fileName?: string, _options?: RequestOptions): Promise<Response>;
}
