import { ReactNode } from "react";


type TScreenLayoutTopProps = {
    children: ReactNode;
};

export const ScreenLayoutTop = ({ children }: TScreenLayoutTopProps) => {
    return <div className="flex">{children}</div>;
};
