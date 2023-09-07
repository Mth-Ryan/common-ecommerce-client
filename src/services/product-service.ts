import { RequestOptions } from "../clients/http-client";
import { HttpClientFactory } from "../clients/http-client-factory";
import { PaginatedData } from "../models/core/paginated-data";
import { QueryOptions } from "../models/core/query-options";
import { InventoryInput } from "../models/products/InventoryInput";
import { ProductInput } from "../models/products/product-input";
import { ProductOutput } from "../models/products/product-output";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
import buildQuery from "./core/query-builder";

export interface IProductService extends
    IContentService<ProductInput, ProductOutput, ProductShortOutput> {

    updateInventory: (id: string, input: InventoryInput) => Promise<void>;

    getAllWithAnyDiscount: (query: QueryOptions, opts?: RequestOptions) =>
        Promise<PaginatedData<ProductShortOutput>>;
}

export class ProductService extends
    ContentService<ProductInput, ProductOutput, ProductShortOutput> implements
    IProductService {

    baseRoute: string = "/Products";
    clientFactory: HttpClientFactory;

    constructor(clientFactory: HttpClientFactory) {
        super();
        this.clientFactory = clientFactory;
    }

    public async updateInventory(id: string, input: InventoryInput) {
        const client = this.clientFactory.create({ authorize: true });
        await client.put(`/Products/UpdateInventory/${id}`, input);
    }


    public async getAllWithAnyDiscount(query: QueryOptions, opts?: RequestOptions) {
        const client = this.clientFactory.create();
        const response = await client.get(
            buildQuery("/Products/GetAllWithAnyDiscount", query),
            opts
        );
        const data = await response.json();

        return data as PaginatedData<ProductShortOutput>;
    }
}
