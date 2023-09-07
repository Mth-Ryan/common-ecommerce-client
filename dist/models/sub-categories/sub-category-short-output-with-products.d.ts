import { PaginatedData } from "../core/paginated-data";
import { ProductShortOutput } from "../products/product-short-output";
import { SubCategoryShortOutput } from "./sub-category-short-output";
export type SubCategoryShortOutputWithProducts = SubCategoryShortOutput & {
    products: PaginatedData<ProductShortOutput>;
};
