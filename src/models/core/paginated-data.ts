export type PaginatedData<T> = {
    search: string,
    page: number,
    pageSize: number,
    itemsTotalCount: number,
    pagesTotalCount: number,
    order: string,
    data: T[],
}
