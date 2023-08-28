import { QueryOptions } from "../../models/core/query-options";

function hasAny(query: QueryOptions) {
    return query.page != undefined ||
        query.pageSize != undefined ||
        query.simpleSearch != undefined ||
        query.orderBy != undefined
}

function trimAnd(route: string) {
    return (route[route.length - 1] == "&") ?
        route.slice(0, -1) :
        route;
}

function appendQuery(route: string, queryKey: string, data: any, encode = true) {
    const encodedData = encode ? encodeURIComponent(data) : data;
    return `${route}${queryKey}=${encodedData}&`;
}

export default function buildQuery (baseRoute: string, query: QueryOptions) {
    if (!hasAny(query)) return baseRoute;

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
