"use client";

import { Input } from "@nextui-org/input";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Form } from "@/shared/components/Form";
import { useModalContext } from "@/shared/contexts/modal.contexts";
import { IRoom } from "../../interfaces/room";
import { useRoomForm } from "../../hooks/useRoomForm";
import { useEffect } from "react";
import { ControlledInput } from "@/shared/components/ControlledComponents/ControlledInput";

type TRoomFormProps = {
    defaultValues?: IRoom;
    readonly?: boolean;
};

export default function RoomForm({
    defaultValues,
    readonly = false,
}: TRoomFormProps) {
    const { closeModal } = useModalContext();
    const { register, submit, control, errors } = useRoomForm({
        defaultValues: defaultValues,
    });

    const animals = [
        {
            label: "Cat",
            value: "cat",
            description: "The second most popular pet in the world",
        },
        {
            label: "Dog",
            value: "dog",
            description: "The most popular pet in the world",
        },
        {
            label: "Elephant",
            value: "elephant",
            description: "The largest land animal",
        },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        {
            label: "Tiger",
            value: "tiger",
            description: "The largest cat species",
        },
        {
            label: "Giraffe",
            value: "giraffe",
            description: "The tallest land animal",
        },
        {
            label: "Dolphin",
            value: "dolphin",
            description:
                "A widely distributed and diverse group of aquatic mammals",
        },
        {
            label: "Penguin",
            value: "penguin",
            description: "A group of aquatic flightless birds",
        },
        {
            label: "Zebra",
            value: "zebra",
            description: "A several species of African equids",
        },
        {
            label: "Shark",
            value: "shark",
            description:
                "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
            label: "Whale",
            value: "whale",
            description:
                "Diverse group of fully aquatic placental marine mammals",
        },
        {
            label: "Otter",
            value: "otter",
            description: "A carnivorous mammal in the subfamily Lutrinae",
        },
        {
            label: "Crocodile",
            value: "crocodile",
            description: "A large semiaquatic reptile",
        },
    ];

    return (
        <div>
            <Form.Root onSubmit={submit}>
                <Form.Row>
                    <ControlledInput
                        control={control}
                        type="text"
                        name="name"
                        label="Nome"
                        placeholder="Nome da sala"
                        errorMessage={errors?.name?.message}
                    />
                </Form.Row>
                <Form.Row>
                    <ControlledInput
                        control={control}
                        isReadOnly={readonly}
                        type="text"
                        name="block"
                        label="Bloco"
                        placeholder="Bloco da sala"
                        errorMessage={errors?.block?.message}
                    />
                    <ControlledInput
                        control={control}
                        isReadOnly={readonly}
                        type="number"
                        name="capacity"
                        label="Capacidade"
                        placeholder="Capacidade da sala"
                        errorMessage={errors?.capacity?.message}
                    />
                </Form.Row>
                <Form.Row>
                    <Autocomplete
                        errorMessage={errors?.roomTypeId?.message}
                        isRequired
                        isReadOnly={readonly}
                        name="roomTypeId"
                        label="Tipo da sala"
                        defaultItems={animals}
                        placeholder="Insira o tipo da sala"
                        defaultSelectedKey="cat"
                    >
                        {(item) => (
                            <AutocompleteItem key={item.value}>
                                {item.label}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                </Form.Row>
                <Form.Actions>
                    <Form.Button
                        variant="light"
                        color="danger"
                        type="button"
                        onClick={closeModal}
                    >
                        Cancelar
                    </Form.Button>
                    <Form.Button variant="solid" color="primary">
                        Criar
                    </Form.Button>
                </Form.Actions>
            </Form.Root>
        </div>
    );
}
