import { HttpClientFactory } from "../clients/http-client-factory";
import { InventoryInput } from "../models/products/InventoryInput";
import { ProductInput } from "../models/products/product-input";
import { ProductOutput } from "../models/products/product-output";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";

export interface IProductService extends
    IContentService<ProductInput, ProductOutput, ProductShortOutput> {

    updateInventory: (id: string, input: InventoryInput) => Promise<void>;
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
}
