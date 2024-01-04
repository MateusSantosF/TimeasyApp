"use client"

import {
    Tooltip
} from "@nextui-org/react";
import {  Eye, Trash, Pen } from "@phosphor-icons/react/dist/ssr";
import { Key } from "react";


type TTableActions = {
    isInativate?: boolean;
    onView?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};

export default function TableActions({
    onDelete,
    onEdit,
    onView,
    isInativate,
}: TTableActions) {


    const fireAction = (key: Key) => {
        switch (key) {
            case "view":
                onView?.();
                break;
            case "edit":
                onEdit?.();
                break;
            case "delete":
                onDelete?.();
                break;
        }
    }

    return (
        <div className="relative flex items-center gap-2">
        {onView && (<Tooltip content="Detalhes">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={()=>fireAction("view")}>
            <Eye  size={23} />
          </span>
        </Tooltip>)}
        {onEdit && (   <Tooltip content="Editar">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={()=>fireAction("edit")}>
            <Pen  size={23} />
          </span>
        </Tooltip>)}
        {onDelete && ( <Tooltip color="danger" content="Deletar">
          <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={()=>fireAction("delete")}>
            <Trash size={23} />
          </span>
        </Tooltip>)}
       
      </div>
    )
}