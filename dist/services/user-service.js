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
exports.UserService = void 0;
class UserService {
    constructor(clientFactory) {
        this.httpClientFactory = clientFactory;
    }
    checkEmailAvailability(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create();
            const response = yield client.post("/Users/CheckEmailAvailability", input);
            const data = yield response.json();
            return data;
        });
    }
    signup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create();
            const response = yield client.post("/Users/Signup", input);
            const data = yield response.json();
            return data;
        });
    }
    updatePersonalInfo(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create({ authorize: true });
            yield client.patch("/Users/UserUpdatePersonalInfo", input);
        });
    }
    updateName(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create({ authorize: true });
            yield client.patch("/Users/UserUpdateName", input);
        });
    }
    login(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create();
            const response = yield client.post("/Users/Login", input);
            const data = yield response.json();
            return data;
        });
    }
    refresh(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create();
            const response = yield client.post("/Users/Refresh", input);
            const data = yield response.json();
            return data;
        });
    }
    logout(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.httpClientFactory.create();
            yield client.post("/Users/Logout", input);
        });
    }
}
exports.UserService = UserService;
