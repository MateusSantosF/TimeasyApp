'use client';

import {type ReactNode, createContext, useContext, useState} from 'react';
import {type IRoom} from '../interfaces/room';
import {getTotalPagesCount} from '@/shared/utils/getCurrentPage';

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

export const RoomContextProvider = ({children}: RoomContextProviderProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const [rooms, setRooms] = useState<IRoom[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const fetchRooms = async (query?: string, page = 1) => {
		Promise.resolve(setTimeout(() => { }, 1000));
		setRooms([
			{id: '1', name: 'Sala 01', block: 'D', capacity: 23, roomTypeId: '1'},
			{id: '2', name: 'Sala 02', block: 'E', capacity: 30, roomTypeId: '2'},
			{id: '3', name: 'Sala 03', block: 'F', capacity: 25, roomTypeId: '1'},
			{id: '4', name: 'Sala 04', block: 'A', capacity: 28, roomTypeId: '3'},
			{id: '5', name: 'Sala 05', block: 'B', capacity: 20, roomTypeId: '2'},
		]);
		setCurrentPage(page);
		setTotalPages(getTotalPagesCount(5));
	};

	const changePage = (newPage: number) => {
		setCurrentPage(newPage);
	};

	return (
		<RoomContext.Provider value={{
			fetchRooms,
			rooms,
			isLoading,
			changePage,
			currentPage,
			totalPages,
		}}>
			{children}
		</RoomContext.Provider>
	);
};

export const useRoomContext = () => {
	const ctx = useContext(RoomContext);

	if (ctx !== null) {
		return ctx;
	}

	throw new Error('You cannot use roomContext without a provider.');
};
