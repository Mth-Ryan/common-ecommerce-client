import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { DiscountShortOutputWithProducts } from "../models/discounts/discount-short-output-with-products";
import { ProductShortOutput } from "../models/products/product-short-output";
import { SubCategoryInput } from "../models/sub-categories/sub-category-input";
import { SubCategoryOutput } from "../models/sub-categories/sub-category-output";
import { SubCategoryOutputWithProducts } from "../models/sub-categories/sub-category-output-with-products";
import { SubCategoryShortOutput } from "../models/sub-categories/sub-category-short-output";
import { SubCategoryShortOutputWithProducts } from "../models/sub-categories/sub-category-short-output-with-products";
import { ContentService, IContentService } from "./core/content-service";
export interface ISubCategoryService extends IContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> {
    getAllProducts: (id: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions) => Promise<PaginatedData<ProductShortOutput>>;
    getByIdWithProducts: (id: string, query: QueryOptions) => Promise<SubCategoryOutputWithProducts>;
    getByTitleSlugWithProducts: (titleSlug: string, query: QueryOptions) => Promise<SubCategoryOutputWithProducts>;
    getAllWithProducts: (query: QueryOptions) => Promise<PaginatedData<SubCategoryShortOutputWithProducts>>;
    getMainListWithProducts: (query: QueryOptions) => Promise<PaginatedData<SubCategoryShortOutputWithProducts>>;
}
export declare class SubCategoryService extends ContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> implements ISubCategoryService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    getByIdWithProducts(id: string, query: QueryOptions): Promise<SubCategoryOutputWithProducts>;
    getByTitleSlugWithProducts(titleSlug: string, query: QueryOptions): Promise<SubCategoryOutputWithProducts>;
    getAllWithProducts(query: QueryOptions): Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getMainListWithProducts(query: QueryOptions): Promise<PaginatedData<DiscountShortOutputWithProducts>>;
    getAllProducts(id: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
    getAllProductsByTitleSlug(titleSlug: string, query: QueryOptions): Promise<PaginatedData<ProductShortOutput>>;
}
