import { RequestOptions } from "../../clients/http-client";
import { HttpClientFactory } from "../../clients/http-client-factory";
import { PaginatedData } from "../../models/core/paginated-data";
import { QueryOptions } from "../../models/core/query-options";
import buildQuery from "./query-builder";

export interface IContentService<In, Out, ShortOut> {
    getById: (id: string, opts?: RequestOptions) => Promise<Out>,
    getByTitleSlug: (titleSlug: string, opts?: RequestOptions) => Promise<Out>,
    getAll: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ShortOut>>,
    create: (input: In) => Promise<Out>,
    update: (id: string, input: In) => Promise<Out>,
    delete: (id: string) => Promise<void>,
    getMainList: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ShortOut>>,
    addToMainList: (id: string) => Promise<void>,
    removeFromMainList: (id: string) => Promise<void>,
}

export abstract class ContentService<In, Out, ShortOut> implements
    IContentService<In, Out, ShortOut> {

    abstract baseRoute: string;
    abstract clientFactory: HttpClientFactory;

    public async getById(id: string, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(`${this.baseRoute}/GetById/${id}`, opts);
        const data = await response.json();

        return data as Out;
    }

    public async getByTitleSlug(titleSlug: string, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(`${this.baseRoute}/GetByTitleSlug/${titleSlug}`, opts);
        const data = await response.json();

        return data as Out;
    }

    public async getAll(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAll`, query),
            opts
        );
        const data = await response.json();

        return data as PaginatedData<ShortOut>;
    }

    public async create(input: In, opts?: RequestOptions) {
        const client = this.clientFactory.create({ authorize: true });
        const response = await client.post(`${this.baseRoute}/Create`, input, opts);
        const data = await response.json();

        return data as Out;
    }

    public async update(id: string, input: In, opts?: RequestOptions) {
        const client = this.clientFactory.create({ authorize: true });
        const response = await client.put(`${this.baseRoute}/Update/${id}`, input, opts);
        const data = await response.json();

        return data as Out;
    }

    public async delete(id: string, opts?: RequestOptions) {
        const client = this.clientFactory.create({ authorize: true });
        await client.delete(`${this.baseRoute}/Delete/${id}`, opts);
    }

    public async getMainList(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetMainList`, query), opts);
        const data = await response.json();

        return data as PaginatedData<ShortOut>;
    }

    public async addToMainList(id: string, opts?: RequestOptions) {
        const client = this.clientFactory.create({ authorize: true });
        await client.post(`${this.baseRoute}/AddToMainList/${id}`, opts);
    }

    public async removeFromMainList(id: string, opts?: RequestOptions) {
        const client = this.clientFactory.create({ authorize: true });
        await client.delete(`${this.baseRoute}/RemoveFromMainList/${id}`, opts);
    }
}
