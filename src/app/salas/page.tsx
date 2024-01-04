'use client'
import RoomForm from "@/features/rooms/components/RoomForm";
import RoomTable from "@/features/rooms/components/RoomTable";
import { RoomContextProvider } from "@/features/rooms/contexts/room.context";
import { ScreenLayout } from "@/shared/components/ScreenLayout";
import { useModalContext } from "@/shared/contexts/modal.contexts";
import { setDebounce } from "@/shared/utils/debounce";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState } from "react";


export default function Salas() {

    const { createModal } = useModalContext();
    const [filter, setFilter] = useState<string>();

    return (
        <RoomContextProvider>
            <ScreenLayout.Root>
                <ScreenLayout.Title
                    title="Salas"
                    subTitle="Gerenciamento de salas, edição, criação, visualização..."
                    floatRightComponent={
                        <ScreenLayout.CreateNew onPress={() => createModal({
                            title: "Criar Sala",
                            content: <RoomForm />
                        })} >
                            Criar Sala
                        </ScreenLayout.CreateNew>
                    }>
                </ScreenLayout.Title>
                <ScreenLayout.SearchInput
                    placeholder="Buscar por sala..."
                    onChange={(e) => {
                        setDebounce(() => {
                            setFilter(e.target.value);
                        })
                    }}
                />
                <ScreenLayout.Content>
                    <RoomTable filter={filter} />

                </ScreenLayout.Content>
            </ScreenLayout.Root>
        </RoomContextProvider >
    )
}