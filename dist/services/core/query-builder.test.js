"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const query_builder_1 = __importDefault(require("./query-builder"));
const baseRoute = "/Products/GetAll";
(0, vitest_1.test)("Empty query", () => {
    let query = {};
    (0, vitest_1.expect)((0, query_builder_1.default)(baseRoute, query)).toBe(baseRoute);
});
(0, vitest_1.test)("Full query", () => {
    let query = {
        simpleSearch: "search",
        orderBy: "createdAt.asc",
        page: 0,
        pageSize: 25,
    };
    const expectedRoute = `${baseRoute}?` +
        `SimpleSearch=${encodeURIComponent(query.simpleSearch)}&` +
        `OrderBy=${encodeURIComponent(query.orderBy)}&` +
        `Page=${query.page}&` +
        `PageSize=${query.pageSize}`;
    (0, vitest_1.expect)((0, query_builder_1.default)(baseRoute, query)).toBe(expectedRoute);
});
(0, vitest_1.test)("Mixed query", () => {
    let query = {
        simpleSearch: "search",
        page: 0,
    };
    const expectedRoute = `${baseRoute}?` +
        `SimpleSearch=${encodeURIComponent(query.simpleSearch)}&` +
        `Page=${query.page}`;
    (0, vitest_1.expect)((0, query_builder_1.default)(baseRoute, query)).toBe(expectedRoute);
});
