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
exports.FetchHttpClient = void 0;
const http_client_1 = require("./http-client");
class FetchHttpClient extends http_client_1.HttpClient {
    getOptions(method, data, options) {
        var _a, _b;
        let fetchOptions = {
            method: method,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            cache: "no-store",
            body: undefined,
        };
        if (data)
            fetchOptions.body = JSON.stringify(data);
        if ((options === null || options === void 0 ? void 0 : options.cache) && ((_a = options === null || options === void 0 ? void 0 : options.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
            fetchOptions.cache = ((_b = options === null || options === void 0 ? void 0 : options.cache) === null || _b === void 0 ? void 0 : _b.forceReload) ? "reload" : "force-cache";
        }
        if (this.authorization) {
            fetchOptions.headers["Authorization"] = this.authorization;
        }
        return fetchOptions;
    }
    get(route, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = this.getOptions("GET", undefined, options);
            const url = this.getFullRoute(route);
            return yield fetch(url, fetchOptions);
        });
    }
    post(route, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = this.getOptions("POST", data, options);
            const url = this.getFullRoute(route);
            return yield fetch(url, fetchOptions);
        });
    }
    put(route, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = this.getOptions("PUT", data, options);
            const url = this.getFullRoute(route);
            return yield fetch(url, fetchOptions);
        });
    }
    patch(route, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = this.getOptions("PATCH", data, options);
            const url = this.getFullRoute(route);
            return yield fetch(url, fetchOptions);
        });
    }
    delete(route, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = this.getOptions("DELETE", data, options);
            const url = this.getFullRoute(route);
            return yield fetch(url, fetchOptions);
        });
    }
    filePost(route, data, fileName, _options) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append(fileName || "file", data);
            const url = this.getFullRoute(route);
            const fetchOptions = { method: "POST", body: formData };
            if (this.authorization)
                fetchOptions.headers = { Authorization: this.authorization };
            return yield fetch(url, fetchOptions);
        });
    }
}
exports.FetchHttpClient = FetchHttpClient;
