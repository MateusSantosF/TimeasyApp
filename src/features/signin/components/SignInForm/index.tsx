"use client";

import { ControlledInput } from "@/shared/components/ControlledComponents/ControlledInput";
import { useSignInForm } from "../../hooks/useSignInForm";
import { Form } from "@/shared/components/Form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@/shared/constants/private.routes";

export function SignInForm() {
    const route = useRouter();
    const {
        submit,
        control,
        errors,
        isSubmitting,
        isSubmitSuccessful,
        isSubmitted,
    } = useSignInForm();

    useEffect(() => {
        if (isSubmitSuccessful && isSubmitted) {
            console.log("ESTOU DANDO REDIRECT NO SIGNIN FORM");

            route.replace(privateRoutes.default_route());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, isSubmitted]);

    return (
        <Form.Root onSubmit={submit}>
            <Form.Row>
                <ControlledInput
                    control={control}
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Digite seu email"
                    errorMessage={errors?.email?.message}
                />
            </Form.Row>
            <Form.Row>
                <ControlledInput
                    control={control}
                    type="password"
                    name="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                    errorMessage={errors?.password?.message}
                />
            </Form.Row>
            <Form.Actions>
                <Form.Button
                    variant="solid"
                    color="primary"
                    isLoading={isSubmitting}
                >
                    Logar
                </Form.Button>
            </Form.Actions>
        </Form.Root>
    );
}
