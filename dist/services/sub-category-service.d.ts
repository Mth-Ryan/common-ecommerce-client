import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { ProductShortOutput } from "../models/products/product-short-output";
import { SubCategoryInput } from "../models/sub-categories/sub-category-input";
import { SubCategoryOutput } from "../models/sub-categories/sub-category-output";
import { SubCategoryShortOutput } from "../models/sub-categories/sub-category-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface ISubCategoryService extends IContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> {
    getAllProducts: (id: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
}
export declare class SubCategoryService extends ContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> implements ISubCategoryService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    getAllProducts(id: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug(titleSlug: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
}
