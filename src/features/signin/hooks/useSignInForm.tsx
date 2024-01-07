import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const SignInFormSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(3, "Senha muito curta"),
});

type SignInFormProps = z.infer<typeof SignInFormSchema>;

export const useSignInForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
        reset,
    } = useForm<SignInFormProps>({
        resolver: zodResolver(SignInFormSchema),
    });

    const onSubmit = async (data: SignInFormProps) => {
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        if (result?.error) {
            console.log(result);
            return;
        }
    };

    return {
        errors,
        watch,
        control,
        register,
        setValue,
        reset,
        isSubmitted,
        isSubmitting,
        isSubmitSuccessful,
        submit: handleSubmit(onSubmit),
    };
};
