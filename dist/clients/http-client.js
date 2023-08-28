"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    constructor(baseRoute, authorization) {
        this.baseRoute = baseRoute;
        this.authorization = authorization;
    }
    getFullRoute(subRoute) {
        return this.baseRoute + subRoute;
    }
}
exports.HttpClient = HttpClient;
