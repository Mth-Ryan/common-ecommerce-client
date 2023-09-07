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
import buildQuery from "./core/query-builder";

export interface ISubCategoryService extends
    IContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> {

    getAllProducts: (id: string, query: QueryOptions) =>
        Promise<PaginatedData<ProductShortOutput>>

    getAllProductsByTitleSlug: (titleSlug: string, query: QueryOptions) =>
        Promise<PaginatedData<ProductShortOutput>>

    getByIdWithProducts: (id: string, query: QueryOptions) =>
        Promise<SubCategoryOutputWithProducts>,

    getByTitleSlugWithProducts: (titleSlug: string, query: QueryOptions) =>
        Promise<SubCategoryOutputWithProducts>,

    getAllWithProducts: (query: QueryOptions) =>
        Promise<PaginatedData<SubCategoryShortOutputWithProducts>>,

    getMainListWithProducts: (query: QueryOptions) =>
        Promise<PaginatedData<SubCategoryShortOutputWithProducts>>,
}

export class SubCategoryService extends
    ContentService<SubCategoryInput, SubCategoryOutput, SubCategoryShortOutput> implements
    ISubCategoryService {

    baseRoute: string = "/SubCategories";
    clientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        super();
        this.clientFactory = clientFactory;
    }

    public async getByIdWithProducts(id: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetByIdWithProducts/${id}`, query)
        );
        const data = await response.json();

        return data as SubCategoryOutputWithProducts;
    }

    public async getByTitleSlugWithProducts(titleSlug: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetByIdWithProducts/${titleSlug}`, query)
        );
        const data = await response.json();

        return data as SubCategoryOutputWithProducts;
    }

    public async getAllWithProducts(query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllWithProducts`, query)
        );
        const data = await response.json();

        return data as PaginatedData<DiscountShortOutputWithProducts>;
    }

    public async getMainListWithProducts(query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetMainListWithProducts`, query)
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
}
