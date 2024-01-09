import { DEFAULT_ITEMS_PER_PAGE } from "@/shared/constants/pagination";
import axiosInstance from "@/config/axios";
import { IRoomType } from "../interfaces/roomType";

export async function readOne(dto?: Record<string, any>): Promise<Response> {
    throw new Error("Missing implementation for" + dto);
}
export async function readList(
    currentPage: any
): Promise<PaginatedResult<IRoomType>> {
    const response = await axiosInstance.get(
        `/roomtypes?PageSize=${DEFAULT_ITEMS_PER_PAGE}&Page=${currentPage}`
    );

    return response.data;
}
