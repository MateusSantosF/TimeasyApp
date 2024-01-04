import { ReactNode } from "react";

type TScreenLayoutTitle = {
    title: string;
    subTitle?: string;
    floatRightComponent?: ReactNode;
};

export const ScreenLayoutTitle = ({
    title,
    subTitle,
    floatRightComponent,
}: TScreenLayoutTitle) => {
    return (
        <div className="flex flex-col gap-4 my-10 relative">
            {title && <h2 className="text-6xl font-bold">{title}</h2>}

            {subTitle && (
                <h2 className="text-1xl font-medium my-1" >{subTitle}</h2>
            )}

            {floatRightComponent && (
                <div className="ml-auto">
                    {floatRightComponent}
                </div>
            )}
        </div>
    );
};
