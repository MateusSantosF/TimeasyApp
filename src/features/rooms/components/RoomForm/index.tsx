'use client'

import { Input } from "@nextui-org/input";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Form } from "@/shared/components/Form";
import { useModalContext } from "@/shared/contexts/modal.contexts";
import { IRoom, IRoomCreate } from "../../interfaces/room";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RoomFormSchema = z.object({
    name: z.string().min(3, 'Insira um nome').max(25, 'Use um nome menor'),
    block: z.string().max(2, 'Tamanho máximo de 2 caracteres.'),
    capacity: z.coerce.number().min(1, 'A ocupação máxima deve ser maior que zero'),
    roomTypeId: z.string().min(1, 'Crie um tipo de sala, antes de cadastrar uma sala')
});
type RoomFormProps = z.infer<typeof RoomFormSchema>;


type TRoomFormProps = {
    defaultValue?: IRoomCreate;
    readonly?: boolean;
}

export default function RoomForm({ defaultValue, readonly = false }: TRoomFormProps) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RoomFormProps>({
        mode: "all",
        resolver: zodResolver(RoomFormSchema),
        defaultValues: defaultValue
    })

    console.log(errors)
    const onSubmit = (data: RoomFormProps) => {
        console.log(data)
    }

    const { closeModal } = useModalContext();
    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        { label: "Tiger", value: "tiger", description: "The largest cat species" },
        { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },
        {
            label: "Dolphin",
            value: "dolphin",
            description: "A widely distributed and diverse group of aquatic mammals",
        },
        { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
        { label: "Zebra", value: "zebra", description: "A several species of African equids" },
        {
            label: "Shark",
            value: "shark",
            description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
            label: "Whale",
            value: "whale",
            description: "Diverse group of fully aquatic placental marine mammals",
        },
        { label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
        { label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile" },
    ];

    return (
        <div>
            <Form.Root onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Input {...register("name")} type="text" label="Nome" placeholder="Nome da sala"
                        errorMessage={errors?.name?.message}
                    />
                </Form.Row>
                <Form.Row>
                    <Input {...register("block")} type="text" label="Bloco" placeholder="Bloco da sala"
                        errorMessage={errors?.block?.message}
                    />
                    <Input {...register("capacity")} type="number" label="Capacidade" placeholder="Capacidade da sala"
                        errorMessage={errors?.capacity?.message}
                    />
                </Form.Row>
                <Form.Row>
                    <Autocomplete
                        {...register("roomTypeId")}
                        errorMessage={errors?.roomTypeId?.message}
                        isRequired
                        label="Tipo da sala"
                        defaultItems={animals}
                        placeholder="Insira o tipo da sala"
                        defaultSelectedKey="cat"
                    >
                        {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                </Form.Row>
                <Form.Actions>
                    <Form.Button variant="light" color="danger" type="button" onClick={closeModal}>
                        Cancelar
                    </Form.Button>
                    <Form.Button variant="solid" color="primary">
                        Criar
                    </Form.Button>
                </Form.Actions>
            </Form.Root>
        </div>
    )
}