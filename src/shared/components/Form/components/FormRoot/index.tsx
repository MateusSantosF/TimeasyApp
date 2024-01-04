import React, { HTMLProps } from 'react';

interface CustomFormProps extends HTMLProps<HTMLFormElement> {
}

export default function FormRoot({ children, ...rest }: CustomFormProps) {
    return (
        <form className="flex gap-4 flex-col" {...rest}>
            {children}
        </form>
    );
};