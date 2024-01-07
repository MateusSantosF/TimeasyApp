import { DEFAULT_ITEMS_PER_PAGE } from "@/shared/constants/pagination";
import apiClient from "@/shared/api/index";
import { IRoom } from "../interfaces/room";

export async function readOne(dto?: Record<string, any>): Promise<Response> {
    throw new Error("Missing implementation for" + dto);
}
export async function readList(
    currentPage: any
): Promise<PaginatedResult<IRoom>> {
    const response = await apiClient.get(
        `/rooms?PageSize=${DEFAULT_ITEMS_PER_PAGE}&Page=${currentPage}`
    );

    return response.data;
}
