import { type ReactNode, createContext, useContext, useState } from "react";
import { type IRoom } from "../interfaces/room";
import { readList } from "../services/RoomService";

type RoomContextProviderProps = {
    children: ReactNode;
};

type TRoomsProps = {
    rooms: IRoom[];
    fetchRooms: (query?: string) => Promise<void>;
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
    changePage: (newPage: number) => void;
};

const RoomContext = createContext<TRoomsProps | null>(null);

export const RoomContextProvider = ({ children }: RoomContextProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchRooms = async (query?: string, page = 1) => {
        const response = await readList(page);

        setRooms(response.results);
        setCurrentPage(response.currentPage);
        setTotalPages(response.pageCount);
    };

    const changePage = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <RoomContext.Provider
            value={{
                fetchRooms,
                rooms,
                isLoading,
                changePage,
                currentPage,
                totalPages,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

export const useRoomContext = () => {
    const ctx = useContext(RoomContext);

    if (ctx !== null) {
        return ctx;
    }

    throw new Error("You cannot use roomContext without a provider.");
};
