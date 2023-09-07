import { PaginatedData } from "../core/paginated-data";
import { ProductShortOutput } from "../products/product-short-output";
import { DiscountOutput } from "./discount-output";

export type DiscountOutputWithProducts = DiscountOutput & {
    products: PaginatedData<ProductShortOutput>;
}
