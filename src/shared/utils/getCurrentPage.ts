

export const getTotalPagesCount = (dataCount: number, rowsPerPage: number = 2) => {
    return dataCount ? Math.ceil(dataCount / rowsPerPage) : 0;
}