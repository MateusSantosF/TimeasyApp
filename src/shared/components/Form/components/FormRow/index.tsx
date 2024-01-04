import React, { ReactNode } from 'react';

interface FormRowProps {
    children: ReactNode;
}

export default function FormRow({ children }: FormRowProps) {
    return (
        <div className="flex flex-1 gap-4">
            {children}
        </div>
    );
};