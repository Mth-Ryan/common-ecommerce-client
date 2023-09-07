import { RequestOptions } from "../clients/http-client";
import { HttpClientFactory } from "../clients/http-client-factory";
import { IdInput } from "../models/core/id-input";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { DiscountInput } from "../models/discounts/discount-input";
import { DiscountOutput } from "../models/discounts/discount-output";
import { DiscountOutputWithProducts } from "../models/discounts/discount-output-with-products";
import { DiscountShortOutput } from "../models/discounts/discount-short-output";
import { DiscountShortOutputWithProducts } from "../models/discounts/discount-short-output-with-products";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
import buildQuery from "./core/query-builder";

export interface IDiscountService extends
    IContentService<DiscountInput, DiscountOutput, DiscountShortOutput> {

    getAllProducts: (id: string, query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<ProductShortOutput>>,

    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<ProductShortOutput>>,

    getByIdWithProducts: (id: string, query: QueryOptions, opts?: RequestOptions) =>
        Promise<DiscountOutputWithProducts>,

    getByTitleSlugWithProducts: (titleSlug: string, query: QueryOptions, opts?: RequestOptions) =>
        Promise<DiscountOutputWithProducts>,

    getAllWithProducts: (query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<DiscountShortOutputWithProducts>>,

    getAllActiveWithProducts: (query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<DiscountShortOutputWithProducts>>,

    getMainListWithProducts: (query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<DiscountShortOutputWithProducts>>,

    addProduct: (discountId: string, productId: string) => Promise<void>,

    removeProduct: (discountId: string, productId: string) => Promise<void>,
}

export class DiscountService extends
    ContentService<DiscountInput, DiscountOutput, DiscountShortOutput> implements
    IDiscountService {

    baseRoute: string = "/Discounts";
    clientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        super();
        this.clientFactory = clientFactory;
    }

    public async getByIdWithProducts(id: string, query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetByIdWithProducts/${id}`, query),
            opts
        );
        const data = await response.json();

        return data as DiscountOutputWithProducts;
    }

    public async getByTitleSlugWithProducts(titleSlug: string, query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetByTitleSlugWithProducts/${titleSlug}`, query),
            opts
        );
        const data = await response.json();

        return data as DiscountOutputWithProducts;
    }

    public async getAllWithProducts(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllWithProducts`, query),
            opts
        );
        const data = await response.json();

        return data as PaginatedData<DiscountShortOutputWithProducts>;
    }

    public async getMainListWithProducts(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetMainListWithProducts`, query),
            opts
        );
        const data = await response.json();

        return data as PaginatedData<DiscountShortOutputWithProducts>;
    }

    public async getAllActiveWithProducts(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllActiveWithProducts`, query),
            opts
        );
        const data = await response.json();

        return data as PaginatedData<DiscountShortOutputWithProducts>;
    }

    public async getAllProducts(id: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllProducts/${id}`, query)
        );
        const data = await response.json();

        return data as PaginatedData<ProductShortOutput>;
    }

    public async getAllProductsByTitleSlug(titleSlug: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllProductsByTitleSlug/${titleSlug}`, query)
        );
        const data = await response.json();

        return data as PaginatedData<ProductShortOutput>;
    }


    public async addProduct(discountId: string, productId: string) {
        const client = this.clientFactory.create({ authorize: true });
        await client.post(
            `${this.baseRoute}/AddProduct/${discountId}`,
            { id: productId } satisfies IdInput
        );
    }

    public async removeProduct(discountId: string, productId: string) {
        const client = this.clientFactory.create({ authorize: true });
        await client.post(
            `${this.baseRoute}/RemoveProduct/${discountId}`,
            { id: productId } satisfies IdInput
        );
    }
}
