'use client'
import { Table, TableCell, TableRow, TableColumn, TableHeader, TableBody } from "@nextui-org/table";
import { useRoomContext } from "../../contexts/room.context";
import { useEffect } from "react";
import TableActions from "@/shared/components/TableActions";
import CustomPagination from "@/shared/components/CustomPagination";
import { Spinner } from "@nextui-org/react";
import { useModalContext } from "@/shared/contexts/modal.contexts";
import RoomForm from "../RoomForm";


type TRoomTableprops = {
    filter?: string;
}

export default function RoomTable({ filter }: TRoomTableprops) {

    const { createModal } = useModalContext();
    const { rooms, fetchRooms, currentPage, changePage, totalPages, isLoading } = useRoomContext();

    useEffect(() => {
        fetchRooms(filter);
    }, [filter])

    const loadingState = isLoading || rooms?.length === 0 ? "loading" : "idle";

    const serializeRows = () => {
        return rooms.map(room => {
            return (
                <TableRow key={room.id}>
                    <TableCell>
                        {room.name}
                    </TableCell>
                    <TableCell>
                        {room.block}
                    </TableCell>
                    <TableCell>
                        {room.capacity}
                    </TableCell>
                    <TableCell>
                        {"Sala de Aula"}
                    </TableCell>
                    <TableCell>
                        <TableActions onEdit={() =>{
                             createModal({
                                title: "Editar Sala",
                                content: <RoomForm defaultValues={room} />
                            })
                        }} onDelete={() => { }} onView={() => { }}
                        />
                    </TableCell>
                </TableRow>)
        })
    }

    return (
        <Table
            aria-label="Tabela de salas"
            isCompact
            bottomContentPlacement="outside"
            bottomContent={<CustomPagination currentPage={currentPage} total={totalPages} onChange={changePage} />}
        >
            <TableHeader>
                <TableColumn className="text-bold text-md" key="name" align="start">Nome</TableColumn>
                <TableColumn className="text-bold text-md" key="block" align="start">Bloco</TableColumn>
                <TableColumn className="text-bold text-md" key="capacity" align="start">Capacidade</TableColumn>
                <TableColumn className="text-bold text-md" key="type" align="start">Tipo</TableColumn>
                <TableColumn className="text-bold text-md" key="actions" align="center" >Ações</TableColumn>
            </TableHeader>
            <TableBody
                loadingContent={<Spinner />}
                loadingState={loadingState}
                emptyContent={"Não há salas cadastradas."}>
                {serializeRows()}
            </TableBody>
        </Table>
    );
}