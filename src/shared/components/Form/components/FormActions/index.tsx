import React, { ReactNode } from 'react';

interface FormActionsProps {
    children: ReactNode;
}

export default function FormActions({ children }: FormActionsProps) {
    return (
        <div className="flex justify-center gap-4 flex-row">
            {children}
        </div>
    );
};