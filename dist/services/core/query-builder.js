"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasAny(query) {
    return query.page != undefined ||
        query.pageSize != undefined ||
        query.simpleSearch != undefined ||
        query.orderBy != undefined;
}
function trimAnd(route) {
    return (route[route.length - 1] == "&") ?
        route.slice(0, -1) :
        route;
}
function appendQuery(route, queryKey, data, encode = true) {
    const encodedData = encode ? encodeURIComponent(data) : data;
    return `${route}${queryKey}=${encodedData}&`;
}
function buildQuery(baseRoute, query) {
    if (!hasAny(query))
        return baseRoute;
    let route = `${baseRoute}?`;
    if (query.simpleSearch)
        route = appendQuery(route, "SimpleSearch", query.simpleSearch);
    if (query.orderBy)
        route = appendQuery(route, "OrderBy", query.orderBy);
    if (query.page != undefined)
        route = appendQuery(route, "Page", query.page, false);
    if (query.pageSize != undefined)
        route = appendQuery(route, "PageSize", query.pageSize, false);
    return trimAnd(route);
}
exports.default = buildQuery;
