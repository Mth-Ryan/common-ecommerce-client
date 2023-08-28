import { RequestOptions } from "../../clients/http-client";
import { HttpClientFactory } from "../../clients/http-client-factory";
import { PaginatedData } from "../../models/core/paginated-data";
import { QueryOptions } from "../../models/core/query-options";
export interface IContentService<In, Out, ShortOut> {
    getById: (id: string, opts?: RequestOptions) => Promise<Out>;
    getByTitleSlug: (titleSlug: string, opts?: RequestOptions) => Promise<Out>;
    getAll: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ShortOut>>;
    create: (input: In) => Promise<Out>;
    update: (id: string, input: In) => Promise<Out>;
    delete: (id: string) => Promise<void>;
    getMainList: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ShortOut>>;
    addToMainList: (id: string) => Promise<void>;
    removeFromMainList: (id: string) => Promise<void>;
}
export declare abstract class ContentService<In, Out, ShortOut> implements IContentService<In, Out, ShortOut> {
    abstract baseRoute: string;
    abstract clientFactory: HttpClientFactory;
    getById(id: string, opts?: RequestOptions): Promise<Out>;
    getByTitleSlug(titleSlug: string, opts?: RequestOptions): Promise<Out>;
    getAll(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<ShortOut>>;
    create(input: In, opts?: RequestOptions): Promise<Out>;
    update(id: string, input: In, opts?: RequestOptions): Promise<Out>;
    delete(id: string, opts?: RequestOptions): Promise<void>;
    getMainList(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<ShortOut>>;
    addToMainList(id: string, opts?: RequestOptions): Promise<void>;
    removeFromMainList(id: string, opts?: RequestOptions): Promise<void>;
}
