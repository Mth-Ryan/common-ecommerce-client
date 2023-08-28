import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { MajorCategoryInput } from "../models/major-categories/major-category-input";
import { MajorCategoryOutput } from "../models/major-categories/major-category-output";
import { MajorCategoryShortOutput } from "../models/major-categories/major-category-short-output";
import { SubCategoryShortOutput } from "../models/sub-categories/sub-category-short-output";
import { ContentService, IContentService } from "./core/content-service";
import buildQuery from "./core/query-builder";

export interface IMajorCategoryService extends
    IContentService<MajorCategoryInput, MajorCategoryOutput, MajorCategoryShortOutput> {

    getAllSubs: (id: string, query: QueryOptions) =>
        Promise<PaginatedData<SubCategoryShortOutput>>,

    getAllSubsByTitleSlug: (titleSlug: string, query: QueryOptions) =>
        Promise<PaginatedData<SubCategoryShortOutput>>,
}

export class MajorCategoryService extends
    ContentService<MajorCategoryInput, MajorCategoryOutput, MajorCategoryShortOutput> implements
    IMajorCategoryService {

    baseRoute: string = "/MajorCategories";
    clientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        super();
        this.clientFactory = clientFactory;
    }
    public async getAllSubs(id: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllSubs/${id}`, query)
        );
        const data = await response.json();

        return data as PaginatedData<SubCategoryShortOutput>;
    }

    public async getAllSubsByTitleSlug(titleSlug: string, query: QueryOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery(`${this.baseRoute}/GetAllSubsByTitleSlug/${titleSlug}`, query)
        );
        const data = await response.json();

        return data as PaginatedData<SubCategoryShortOutput>;
    }
}

