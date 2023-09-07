import { RequestOptions } from "../clients/http-client";
import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { InventoryInput } from "../models/products/InventoryInput";
import { ProductInput } from "../models/products/product-input";
import { ProductOutput } from "../models/products/product-output";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface IProductService extends IContentService<ProductInput, ProductOutput, ProductShortOutput> {
    updateInventory: (id: string, input: InventoryInput) => Promise<void>;
    getAllWithAnyDiscount: (query: QueryOptions, opts?: RequestOptions) => Promise<PaginatedData<ProductShortOutput>>;
}
export declare class ProductService extends ContentService<ProductInput, ProductOutput, ProductShortOutput> implements IProductService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    updateInventory(id: string, input: InventoryInput): Promise<void>;
    getAllWithAnyDiscount(query: QueryOptions, opts?: RequestOptions): Promise<PaginatedData<ProductShortOutput>>;
}
