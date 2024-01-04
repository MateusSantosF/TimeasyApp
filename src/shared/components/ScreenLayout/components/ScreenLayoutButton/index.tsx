import { Button } from "@nextui-org/react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { ComponentProps, ReactNode } from "react";

type TScreenLayoutButtonProps = {
    children: ReactNode;
} & ComponentProps<typeof Button>;

export const ScreenLayoutButton = ({
    children,
    ...props
}: TScreenLayoutButtonProps) => {
    return (
        <Button {...props} type="button" variant="shadow" color="primary" className="font-medium text-md">
            <Plus />
            {children}
        </Button>
    );
};
