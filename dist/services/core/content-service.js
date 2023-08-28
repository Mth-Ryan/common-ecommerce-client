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
exports.ContentService = void 0;
const query_builder_1 = __importDefault(require("./query-builder"));
class ContentService {
    getById(id, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create();
            const response = yield client.get(`${this.baseRoute}/GetById/${id}`, opts);
            const data = yield response.json();
            return data;
        });
    }
    getByTitleSlug(titleSlug, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create();
            const response = yield client.get(`${this.baseRoute}/GetByTitleSlug/${titleSlug}`, opts);
            const data = yield response.json();
            return data;
        });
    }
    getAll(query, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create();
            const response = yield client.get((0, query_builder_1.default)(`${this.baseRoute}/GetAll`, query), opts);
            const data = yield response.json();
            return data;
        });
    }
    create(input, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            const response = yield client.post(`${this.baseRoute}/Create`, input, opts);
            const data = yield response.json();
            return data;
        });
    }
    update(id, input, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            const response = yield client.put(`${this.baseRoute}/Update/${id}`, input, opts);
            const data = yield response.json();
            return data;
        });
    }
    delete(id, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            yield client.delete(`${this.baseRoute}/Delete/${id}`, opts);
        });
    }
    getMainList(query, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create();
            const response = yield client.get((0, query_builder_1.default)(`${this.baseRoute}/GetMainList`, query), opts);
            const data = yield response.json();
            return data;
        });
    }
    addToMainList(id, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            yield client.post(`${this.baseRoute}/AddToMainList/${id}`, opts);
        });
    }
    removeFromMainList(id, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.clientFactory.create({ authorize: true });
            yield client.delete(`${this.baseRoute}/RemoveFromMainList/${id}`, opts);
        });
    }
}
exports.ContentService = ContentService;
