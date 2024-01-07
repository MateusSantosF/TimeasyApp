"use client";

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Dropdown,
    Avatar,
} from "@nextui-org/react";
import { Book, CaretDown, Door } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@/shared/constants/private.routes";
import { signOut, useSession } from "next-auth/react";

export default function CustomNavbar() {
    const route = useRouter();

    const { data: session } = useSession();
    const menuKeys = [
        "rooms",
        "roomTypes",
        "courses",
        "subjects",
        "teachers",
        "timetable",
        "logout",
    ];

    const handleSelectionChange = (key: React.Key) => {
        switch (key) {
            case "rooms":
                route.push(privateRoutes.list_rooms());
                break;
            case "subjects":
                route.push(privateRoutes.list_subjects());
                break;
        }
    };

    return (
        <Navbar>
            <NavbarContent>
                <Dropdown>
                    <NavbarBrand>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                endContent={<CaretDown size={16} />}
                                radius="sm"
                                variant="ghost"
                            >
                                <p className="font-bold text-inherit">
                                    TIMEASY
                                </p>
                            </Button>
                        </DropdownTrigger>
                    </NavbarBrand>
                    <DropdownMenu
                        onAction={handleSelectionChange}
                        selectionMode="single"
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="rooms"
                            description="Gerenciamento de salas."
                            startContent={<Door size={32} />}
                        >
                            Sala
                        </DropdownItem>
                        <DropdownItem
                            className="ml-auto"
                            key="roomTypes"
                            description="Gerenciamento de tipos de sala."
                        >
                            Tipo de Sala
                        </DropdownItem>
                        <DropdownItem
                            key="courses"
                            description="Gerenciamento de cursos"
                            startContent={<Book size={32} />}
                        >
                            Cursos
                        </DropdownItem>
                        <DropdownItem
                            className="ml-auto"
                            key="subjects"
                            description="Gerenciamento de disciplinas"
                        >
                            Disciplinas
                        </DropdownItem>
                        <DropdownItem
                            key="teachers"
                            description="Gerenciamento de professores."
                        >
                            Profesorres
                        </DropdownItem>
                        <DropdownItem
                            key="timetable"
                            description="Gerenciamento de professores."
                        >
                            Horários
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            {session && (
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="primary"
                                name={`teste ${session.fullName}`}
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Profile Actions"
                            variant="flat"
                        >
                            <DropdownItem
                                key="profile"
                                className="gap-2"
                                textValue="Username"
                            >
                                <p className="font-semibold">
                                    {session.fullName}
                                </p>
                            </DropdownItem>

                            <DropdownItem
                                key="configurations"
                                textValue="Configurações"
                            >
                                Configurações
                            </DropdownItem>

                            <DropdownItem
                                textValue="sair"
                                key="logout"
                                color="danger"
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Sair
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            )}
        </Navbar>
    );
}
