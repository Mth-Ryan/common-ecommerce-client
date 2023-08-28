"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CesRestClient = void 0;
const http_client_factory_1 = require("./clients/http-client-factory");
const discount_service_1 = require("./services/discount-service");
const major_category_service_1 = require("./services/major-category-service");
const product_service_1 = require("./services/product-service");
const sub_category_service_1 = require("./services/sub-category-service");
const user_service_1 = require("./services/user-service");
function CesRestClient(apiOrigin, acessToken) {
    const factory = new http_client_factory_1.HttpClientFactory(apiOrigin, acessToken);
    return {
        users: new user_service_1.UserService(factory),
        majorCategories: new major_category_service_1.MajorCategoryService(factory),
        subCategories: new sub_category_service_1.SubCategoryService(factory),
        products: new product_service_1.ProductService(factory),
        discounts: new discount_service_1.DiscountService(factory),
    };
}
exports.CesRestClient = CesRestClient;
