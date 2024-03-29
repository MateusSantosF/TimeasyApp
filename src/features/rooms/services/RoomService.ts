import { DEFAULT_ITEMS_PER_PAGE } from "@/shared/constants/pagination";
import { IRoom } from "../interfaces/room";
import axiosInstance from "@/config/axios";

export async function readOne(dto?: Record<string, any>): Promise<Response> {
    throw new Error("Missing implementation for" + dto);
}
export async function readList(
    currentPage: any
): Promise<PaginatedResult<IRoom>> {
    const response = await axiosInstance.get(
        `/rooms?PageSize=${DEFAULT_ITEMS_PER_PAGE}&Page=${currentPage}`
    );

    return response.data;
}
