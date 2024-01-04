import { Button } from "@nextui-org/button";
import { ComponentProps } from "react";


type TFormButtonProps = {} & ComponentProps<typeof Button>;

export default function FormButton({
    children,
    type = "submit",
    ...props
}: TFormButtonProps) {
    return (
        <Button type={type} {...props}>
            {children}
        </Button>
    );
};
