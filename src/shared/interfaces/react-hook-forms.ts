import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type TControlledProps<T extends FieldValues> = {
    control: Control<T, any>;
    name: Path<T>;
};
