import { TControlledProps } from "@/shared/interfaces/react-hook-forms";
import { Input, InputProps } from "@nextui-org/input";
import { Controller, FieldValues } from "react-hook-form";

export type TControlledInputProps<T extends FieldValues> = TControlledProps<T> &
    InputProps;

export const ControlledInput = <T extends FieldValues>({
    control,
    name,
    onChange: extraOnChange,
    onBlur: extraOnBlur,
    ...rest
}: TControlledInputProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, name, onBlur },
                fieldState: { error },
            }) => (
                <Input
                    name={name}
                    value={value}
                    defaultValue={value}
                    errorMessage={error?.message}
                    isInvalid={!!error?.ref}
                    {...rest}
                    onChange={(e) => {
                        onChange(e);
                        if (extraOnChange) extraOnChange(e);
                    }}
                    onBlur={(e) => {
                        onBlur();
                        if (extraOnBlur) extraOnBlur(e);
                    }}
                />
            )}
        />
    );
};
