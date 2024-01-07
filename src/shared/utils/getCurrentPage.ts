import { DEFAULT_ITEMS_PER_PAGE } from "../constants/pagination";

export const getTotalPagesCount = (
    dataCount: number,
    rowsPerPage: number = DEFAULT_ITEMS_PER_PAGE
) => {
    return dataCount ? Math.ceil(dataCount / rowsPerPage) : 0;
};
