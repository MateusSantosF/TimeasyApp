import { ReactNode } from "react";


type TScreenLayoutRootProps = {
    children: ReactNode;
};
export const ScreenLayoutRoot = ({ children }: TScreenLayoutRootProps) => {
    return <div className="flex flex-1 gap-8 p-4 flex-col">{children}</div>;
};
