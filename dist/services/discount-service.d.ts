import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { DiscountInput } from "../models/discounts/discount-input";
import { DiscountOutput } from "../models/discounts/discount-output";
import { DiscountShortOutput } from "../models/discounts/discount-short-output";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface IDiscountService extends IContentService<DiscountInput, DiscountOutput, DiscountShortOutput> {
    getAllProducts: (id: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
    addProduct: (discountId: string, productId: string) => Promise<void>;
    removeProduct: (discountId: string, productId: string) => Promise<void>;
}
export declare class DiscountService extends ContentService<DiscountInput, DiscountOutput, DiscountShortOutput> implements IDiscountService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    getAllProducts(id: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug(titleSlug: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    addProduct(discountId: string, productId: string): Promise<void>;
    removeProduct(discountId: string, productId: string): Promise<void>;
}
