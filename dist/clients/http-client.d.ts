export type CacheOptions = {
    enable?: boolean;
    forceReload?: boolean;
};
export type RequestOptions = {
    cache?: CacheOptions;
};
export declare abstract class HttpClient {
    protected baseRoute: string;
    protected authorization?: string;
    constructor(baseRoute: string, authorization?: string);
    protected getFullRoute(subRoute: string): string;
    abstract get(route: string, options?: RequestOptions): Promise<Response>;
    abstract post(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    abstract put(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    abstract patch(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    abstract delete(route: string, options?: RequestOptions): Promise<Response>;
    abstract filePost(route: string, data: File, fileName?: string, options?: RequestOptions): Promise<Response>;
}
