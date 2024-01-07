"use client";

import { ModalContextProvider } from "@/shared/contexts/modal.contexts";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <SessionProvider>
                <ModalContextProvider>{children}</ModalContextProvider>
            </SessionProvider>
        </NextUIProvider>
    );
}
