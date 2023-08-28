export type CacheOptions = {
    enable?: boolean,
    forceReload?: boolean,
}

export type RequestOptions = {
    cache?: CacheOptions,
}

export abstract class HttpClient {
    protected baseRoute: string
    protected authorization?: string;

    constructor(baseRoute: string, authorization?: string) {
        this.baseRoute = baseRoute;
        this.authorization = authorization;
    }

    protected getFullRoute(subRoute: string) {
        return this.baseRoute + subRoute;
    }

    public abstract get(route: string, options?: RequestOptions): Promise<Response>;
    public abstract post(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    public abstract put(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    public abstract patch(route: string, data?: any, options?: RequestOptions): Promise<Response>;
    public abstract delete(route: string, options?: RequestOptions): Promise<Response>;
    public abstract filePost(route: string, data: File, fileName?: string, options?: RequestOptions): Promise<Response>;
}

