import { DiscountService } from "./services/discount-service";
import { MajorCategoryService } from "./services/major-category-service";
import { ProductService } from "./services/product-service";
import { SubCategoryService } from "./services/sub-category-service";
import { UserService } from "./services/user-service";
export { BaseModel } from "./models/core/base-model";
export { BaseContentModel } from "./models/core/base-content-model";
export { BaseContentShortModel } from "./models/core/base-content-short-model";
export { PaginatedData } from "./models/core/paginated-data";
export { QueryOptions } from "./models/core/query-options";
export { IdInput } from "./models/core/id-input";
export { DiscountInput } from "./models/discounts/discount-input";
export { DiscountOutput } from "./models/discounts/discount-output";
export { DiscountShortOutput } from "./models/discounts/discount-short-output";
export { MajorCategoryInput } from "./models/major-categories/major-category-input";
export { MajorCategoryOutput } from "./models/major-categories/major-category-output";
export { MajorCategoryShortOutput } from "./models/major-categories/major-category-short-output";
export { SubCategoryInput } from "./models/sub-categories/sub-category-input";
export { SubCategoryOutput } from "./models/sub-categories/sub-category-output";
export { SubCategoryShortOutput } from "./models/sub-categories/sub-category-short-output";
export { ProductInput } from "./models/products/product-input";
export { ProductOutput } from "./models/products/product-output";
export { ProductShortOutput } from "./models/products/product-short-output";
export { EmailInput } from "./models/user/email-input";
export { LoginInput } from "./models/user/login-input";
export { SignupInput } from "./models/user/signup-input";
export { UpdateNameInput } from "./models/user/update-name-input";
export { UpdatePersonalInfoInput } from "./models/user/update-personal-info-input";
export { RefreshTokenInput } from "./models/user/refresh-token-input";
export { TokensOutput } from "./models/user/tokens-output";
export declare function CesRestClient(apiOrigin: string, acessToken?: string): {
    users: UserService;
    majorCategories: MajorCategoryService;
    subCategories: SubCategoryService;
    products: ProductService;
    discounts: DiscountService;
};
