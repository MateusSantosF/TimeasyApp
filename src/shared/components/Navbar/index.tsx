'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownMenu, DropdownTrigger, Dropdown } from "@nextui-org/react";
import { Book, CaretDown, Door } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@/shared/constants/private.routes";


export default function CustomNavbar() {
    const route = useRouter();
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
                route.push(privateRoutes.list_rooms())
                break;
            case "subjects":
                route.push(privateRoutes.list_subjects())
                break;
        }

    }

    return (
        <Navbar >
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
                                <p className="font-bold text-inherit">TIMEASY</p>
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

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}
