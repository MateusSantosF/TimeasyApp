import { Pagination } from "@nextui-org/react";
import { ComponentProps } from "react";


type TCustomPaginationProps = {
    total: number,
    currentPage: number,
    onChange: (newPage: number) => void;
} & ComponentProps<typeof Pagination>

export default function CustomPagination({ total, currentPage, onChange, ...props }: TCustomPaginationProps) {

    if (total == 0) return null;

    return (
        <div className="flex w-full justify-center">
            <Pagination
                {...props}
                isCompact
                showControls
                showShadow
                color="primary"
                page={currentPage}
                total={total}
                onChange={onChange}
            />
        </div>
    );
}
