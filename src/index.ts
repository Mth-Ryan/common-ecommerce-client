import { HttpClientFactory } from "./clients/http-client-factory";
import { DiscountService } from "./services/discount-service";
import { MajorCategoryService } from "./services/major-category-service";
import { ProductService } from "./services/product-service";
import { SubCategoryService } from "./services/sub-category-service";
import { UserService } from "./services/user-service";

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
