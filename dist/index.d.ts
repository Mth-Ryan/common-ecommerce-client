import { DiscountService } from "./services/discount-service";
import { MajorCategoryService } from "./services/major-category-service";
import { ProductService } from "./services/product-service";
import { SubCategoryService } from "./services/sub-category-service";
import { UserService } from "./services/user-service";
export declare function CesRestClient(apiOrigin: string, acessToken?: string): {
    users: UserService;
    majorCategories: MajorCategoryService;
    subCategories: SubCategoryService;
    products: ProductService;
    discounts: DiscountService;
};
