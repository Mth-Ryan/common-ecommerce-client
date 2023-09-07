import { PaginatedData } from "../core/paginated-data";
import { ProductShortOutput } from "../products/product-short-output";
import { SubCategoryOutput } from "./sub-category-output";
export type SubCategoryOutputWithProducts = SubCategoryOutput & {
    products: PaginatedData<ProductShortOutput>;
};
