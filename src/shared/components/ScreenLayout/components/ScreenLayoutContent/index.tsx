import { ReactNode } from "react";


type TScreenLayoutContentProps = {
    children: ReactNode;
};

export const ScreenLayoutContent = ({
    children,
}: TScreenLayoutContentProps) => {
    return <div className="flex flex-1 gap-6 flex-col">{children}</div>;
};
