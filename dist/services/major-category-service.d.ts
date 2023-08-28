import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { MajorCategoryInput } from "../models/major-categories/major-category-input";
import { MajorCategoryOutput } from "../models/major-categories/major-category-output";
import { MajorCategoryShortOutput } from "../models/major-categories/major-category-short-output";
import { SubCategoryShortOutput } from "../models/sub-categories/sub-category-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface IMajorCategoryService extends IContentService<MajorCategoryInput, MajorCategoryOutput, MajorCategoryShortOutput> {
    getAllSubs: (id: string, query: QueryOptions) => Promise<PaginatedData<SubCategoryShortOutput>>;
    getAllSubsByTitleSlug: (titleSlug: string, query: QueryOptions) => Promise<PaginatedData<SubCategoryShortOutput>>;
}
export declare class MajorCategoryService extends ContentService<MajorCategoryInput, MajorCategoryOutput, MajorCategoryShortOutput> implements IMajorCategoryService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    getAllSubs(id: string, query: QueryOptions): Promise<PaginatedData<import("../models/core/base-content-short-model").BaseContentShortModel>>;
    getAllSubsByTitleSlug(titleSlug: string, query: QueryOptions): Promise<PaginatedData<import("../models/core/base-content-short-model").BaseContentShortModel>>;
}
