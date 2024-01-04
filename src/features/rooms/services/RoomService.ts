import { BaseService } from "@/shared/core/BaseService";


class RoomService extends BaseService {
    async readOne(dto?: Record<string, any>): Promise<Response> {
        throw new Error("Missing implementation for" + dto);
    }
    async readList(dto?: Record<string, any>): Promise<Response> {
        throw new Error("Missing implementation for" + dto);
    }
    async put(dto: Record<string, any>): Promise<Response> {
        throw new Error("Missing implementation for" + dto);
    }

    async create(dto: Record<string, any>): Promise<Response> {
        throw new Error("Missing implementation for" + dto);
    }
    async delete(dto: Record<string, any>): Promise<Response> {
        throw new Error("Missing implementation for" + dto);
    }
}