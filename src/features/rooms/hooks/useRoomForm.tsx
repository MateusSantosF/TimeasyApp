import { zodResolver } from "@hookform/resolvers/zod";
import { IRoom } from "../interfaces/room";
import { z } from "zod";
import { useForm } from "react-hook-form";

const RoomFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(3, "Insira um nome").max(25, "Use um nome menor"),
    block: z.string().max(2, "Tamanho máximo de 2 caracteres."),
    capacity: z.coerce
        .number()
        .min(1, "A ocupação máxima deve ser maior que zero"),
    roomTypeId: z
        .string()
        .min(1, "Crie um tipo de sala, antes de cadastrar uma sala"),
});

type RoomFormProps = z.infer<typeof RoomFormSchema>;

type TUseRoomFormProps = {
    defaultValues?: IRoom;
    readonly?: boolean;
};

export const useRoomForm = ({
    defaultValues,
    readonly = false,
}: TUseRoomFormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors },
        reset,
    } = useForm<RoomFormProps>({
        defaultValues: defaultValues,
        resolver: zodResolver(RoomFormSchema),
    });

    const onSubmit = (data: RoomFormProps) => {
        console.log(data);
    };

    return {
        onSubmit,
        errors,
        watch,
        control,
        register,
        setValue,
        reset,
        submit: handleSubmit(onSubmit),
    };
};
