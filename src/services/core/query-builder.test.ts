import { expect, test } from "vitest";
import buildQuery from "./query-builder";
import { QueryOptions } from "../../models/core/query-options";

const baseRoute = "/Products/GetAll";

test("Empty query", () => {
    let query: QueryOptions = {};

    expect(buildQuery(baseRoute, query)).toBe(baseRoute);
});


test("Full query", () => {
    let query: QueryOptions = {
        simpleSearch: "search",
        orderBy:"createdAt.asc",
        page: 0,
        pageSize: 25,
    };

    const expectedRoute = `${baseRoute}?` +
        `SimpleSearch=${encodeURIComponent(query.simpleSearch!)}&` +
        `OrderBy=${encodeURIComponent(query.orderBy!)}&` +
        `Page=${query.page}&` +
        `PageSize=${query.pageSize}`

    expect(buildQuery(baseRoute, query)).toBe(expectedRoute);
});


test("Mixed query", () => {
    let query: QueryOptions = {
        simpleSearch: "search",
        page: 0,
    };

    const expectedRoute = `${baseRoute}?` +
        `SimpleSearch=${encodeURIComponent(query.simpleSearch!)}&` +
        `Page=${query.page}`

    expect(buildQuery(baseRoute, query)).toBe(expectedRoute);
});
