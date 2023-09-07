import { RequestOptions } from "../clients/http-client";
import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { DiscountInput } from "../models/discounts/discount-input";
import { DiscountOutput } from "../models/discounts/discount-output";
import { DiscountOutputWithProducts } from "../models/discounts/discount-output-with-products";
import { DiscountShortOutput } from "../models/discounts/discount-short-output";
import { DiscountShortOutputWithProducts } from "../models/discounts/discount-short-output-with-products";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface IDiscountService extends IContentService<DiscountInput, DiscountOutput, DiscountShortOutput> {
    getAllProducts: (id: string, query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getByIdWithProducts: (id: string, query: QueryOptions, opts?: RequestOptions) => Promise<DiscountOutputWithProducts>;
    getByTitleSlugWithProducts: (titleSlug: string, query: QueryOptions, opts?: RequestOptions) => Promise<DiscountOutputWithProducts>;
    getAllWithProducts: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getAllActiveWithProducts: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getMainListWithProducts: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    addProduct: (discountId: string, productId: string) => Promise<void>;
    removeProduct: (discountId: string, productId: string) => Promise<void>;
}
export declare class DiscountService extends ContentService<DiscountInput, DiscountOutput, DiscountShortOutput> implements IDiscountService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    getByIdWithProducts(id: string, query: QueryOptions, opts?: RequestOptions): Promise<DiscountOutputWithProducts>;
    getByTitleSlugWithProducts(titleSlug: string, query: QueryOptions, opts?: RequestOptions): Promise<DiscountOutputWithProducts>;
    getAllWithProducts(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getMainListWithProducts(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getAllActiveWithProducts(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getAllProducts(id: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug(titleSlug: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    addProduct(discountId: string, productId: string): Promise<void>;
    removeProduct(discountId: string, productId: string): Promise<void>;
}
