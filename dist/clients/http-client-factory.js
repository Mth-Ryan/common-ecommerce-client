"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientFactory = void 0;
const fetch_http_client_1 = require("./fetch-http-client");
class HttpClientFactory {
    constructor(apiOrigin, accessToken) {
        this.apiOrigin = apiOrigin;
        accessToken = accessToken;
    }
    create(options) {
        return (options === null || options === void 0 ? void 0 : options.authorize) ?
            new fetch_http_client_1.FetchHttpClient(this.apiOrigin, this.getAuthorization()) :
            new fetch_http_client_1.FetchHttpClient(this.apiOrigin);
    }
    getAuthorization() {
        return `Bearer ${this.accessToken}`;
    }
}
exports.HttpClientFactory = HttpClientFactory;
