interface PaginatedResult<T> {
    results: T[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
}
