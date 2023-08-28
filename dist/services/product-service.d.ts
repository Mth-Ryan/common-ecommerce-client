import { HttpClientFactory } from "../clients/http-client-factory";
import { InventoryInput } from "../models/products/InventoryInput";
import { ProductInput } from "../models/products/product-input";
import { ProductOutput } from "../models/products/product-output";
import { ProductShortOutput } from "../models/products/product-short-output";
import { ContentService, IContentService } from "./core/content-service";
export interface IProductService extends IContentService<ProductInput, ProductOutput, ProductShortOutput> {
    updateInventory: (id: string, input: InventoryInput) => Promise<void>;
}
export declare class ProductService extends ContentService<ProductInput, ProductOutput, ProductShortOutput> implements IProductService {
    baseRoute: string;
    clientFactory: HttpClientFactory;
    constructor(clientFactory: HttpClientFactory);
    updateInventory(id: string, input: InventoryInput): Promise<void>;
}
