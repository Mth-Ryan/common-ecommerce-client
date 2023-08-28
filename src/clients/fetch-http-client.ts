import { HttpClient, RequestOptions } from "./http-client";

export class FetchHttpClient extends HttpClient {
    private getOptions(method: string, data?: any, options?: RequestOptions) {
        let fetchOptions: RequestInit = {
            method: method,
            mode: "cors" as RequestMode,
            headers: {
                "Content-Type": "application/json",
            } as { [key: string]: string },
            cache: "no-store" as RequestCache | undefined,
            body: undefined as string | undefined,
        };

        if (data)
            fetchOptions.body = JSON.stringify(data);

        if (options?.cache && options?.cache?.enable) {
            fetchOptions.cache = options?.cache?.forceReload ? "reload" : "force-cache";
        }

        if (this.authorization) {
            fetchOptions.headers["Authorization"] = this.authorization;
        }

        return fetchOptions;
    }

    public async get(route: string, options?: RequestOptions) {
        const fetchOptions = this.getOptions("GET", undefined, options);
        const url = this.getFullRoute(route);

        return await fetch(url, fetchOptions);
    }

    public async post(route: string, data?: any, options?: RequestOptions) {
        const fetchOptions = this.getOptions("POST", data, options);
        const url = this.getFullRoute(route);

        return await fetch(url, fetchOptions);
    }

    public async put(route: string, data?: any, options?: RequestOptions) {
        const fetchOptions = this.getOptions("PUT", data, options);
        const url = this.getFullRoute(route);

        return await fetch(url, fetchOptions);
    }

    public async patch(route: string, data?: any, options?: RequestOptions) {
        const fetchOptions = this.getOptions("PATCH", data, options);
        const url = this.getFullRoute(route);

        return await fetch(url, fetchOptions);
    }

    public async delete(route: string, data?: any, options?: RequestOptions) {
        const fetchOptions = this.getOptions("DELETE", data, options);
        const url = this.getFullRoute(route);

        return await fetch(url, fetchOptions);
    }

    public async filePost(route: string, data: File, fileName?: string, _options?: RequestOptions) {
        const formData = new FormData();
        formData.append(fileName || "file", data);

        const url = this.getFullRoute(route);

        const fetchOptions = { method: "POST", body: formData } as { 
                    method: string,
                    body: FormData,
                    headers: { [key: string]: string } | undefined
                };
        if (this.authorization)
            fetchOptions.headers = { Authorization: this.authorization };

        return await fetch(url, fetchOptions);
    }
}
