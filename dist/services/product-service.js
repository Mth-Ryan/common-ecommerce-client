"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const content_service_1 = require("./core/content-service");
class ProductService extends content_service_1.ContentService {
    constructor(clientFactory) {
        super();
        this.baseRoute = "/Products";
        this.clientFactory = clientFactory;
    }
    updateInventory(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            yield client.put(`/Products/UpdateInventory/${id}`, input);
        });
    }
}
exports.ProductService = ProductService;
