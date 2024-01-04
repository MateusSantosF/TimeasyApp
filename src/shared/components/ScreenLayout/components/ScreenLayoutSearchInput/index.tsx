import { Input } from "@nextui-org/react";
import { ComponentProps } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";


type TScreenLayoutSearchInputProps = {
} & ComponentProps<typeof Input>;

export const ScreenLayoutSearchInput = ({ ...props }: TScreenLayoutSearchInputProps) => {


    return <div className="w-full max-w-md ">
        <Input type="text"  {...props}

            startContent={
                <MagnifyingGlass size={24} />
            }
        />

    </div>;
};
