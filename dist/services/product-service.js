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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const content_service_1 = require("./core/content-service");
const query_builder_1 = __importDefault(require("./core/query-builder"));
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
    getAllWithAnyDiscount(query, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create();
            const response = yield client.get((0, query_builder_1.default)("/Products/GetAllWithAnyDiscount", query), opts);
            const data = yield response.json();
            return data;
        });
    }
}
exports.ProductService = ProductService;
