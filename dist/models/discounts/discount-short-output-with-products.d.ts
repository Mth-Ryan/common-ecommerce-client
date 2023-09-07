import { PaginatedData } from "../core/paginated-data";
import { ProductShortOutput } from "../products/product-short-output";
import { DiscountShortOutput } from "./discount-short-output";
export type DiscountShortOutputWithProducts = DiscountShortOutput & {
    products: PaginatedData<ProductShortOutput>;
};
