'use client'

import { ModalContextProvider } from '@/shared/contexts/modal.contexts'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </NextUIProvider>
    )
}