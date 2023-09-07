import { HttpClientFactory } from "./clients/http-client-factory";
import { DiscountService } from "./services/discount-service";
import { MajorCategoryService } from "./services/major-category-service";
import { ProductService } from "./services/product-service";
import { SubCategoryService } from "./services/sub-category-service";
import { UserService } from "./services/user-service";

// Core models
export { BaseModel } from "./models/core/base-model";
export { BaseContentModel } from "./models/core/base-content-model";
export { BaseContentShortModel } from "./models/core/base-content-short-model";
export { PaginatedData } from "./models/core/paginated-data";
export { QueryOptions } from "./models/core/query-options";
export { IdInput } from "./models/core/id-input";

// Discount models
export { DiscountInput } from "./models/discounts/discount-input";
export { DiscountOutput } from "./models/discounts/discount-output";
export { DiscountShortOutput } from "./models/discounts/discount-short-output";
export { DiscountOutputWithProducts } from "./models/discounts/discount-output-with-products";
export { DiscountShortOutputWithProducts } from "./models/discounts/discount-short-output-with-products";

// Major Catgegory models
export { MajorCategoryInput } from "./models/major-categories/major-category-input";
export { MajorCategoryOutput } from "./models/major-categories/major-category-output";
export { MajorCategoryShortOutput } from "./models/major-categories/major-category-short-output";

// Sub Catgegory models
export { SubCategoryInput } from "./models/sub-categories/sub-category-input";
export { SubCategoryOutput } from "./models/sub-categories/sub-category-output";
export { SubCategoryShortOutput } from "./models/sub-categories/sub-category-short-output";
export { SubCategoryOutputWithProducts } from "./models/sub-categories/sub-category-output-with-products";
export { SubCategoryShortOutputWithProducts } from "./models/sub-categories/sub-category-short-output-with-products";

// Product models
export { ProductInput } from "./models/products/product-input";
export { ProductOutput } from "./models/products/product-output";
export { ProductShortOutput } from "./models/products/product-short-output";

// User models
export { EmailInput } from "./models/user/email-input";
export { LoginInput } from "./models/user/login-input";
export { SignupInput } from "./models/user/signup-input";
export { UpdateNameInput } from "./models/user/update-name-input";
export { UpdatePersonalInfoInput } from "./models/user/update-personal-info-input";
export { RefreshTokenInput } from "./models/user/refresh-token-input";
export { TokensOutput } from "./models/user/tokens-output";

export function CesRestClient(apiOrigin: string, acessToken?: string) {
    const factory = new HttpClientFactory(apiOrigin, acessToken);
    return {
        users: new UserService(factory),
        majorCategories: new MajorCategoryService(factory),
        subCategories: new SubCategoryService(factory),
        products: new ProductService(factory),
        discounts: new DiscountService(factory),
    };
}
