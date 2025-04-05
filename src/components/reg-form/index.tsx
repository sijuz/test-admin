import { Button, Field, Input, Stack } from "@chakra-ui/react";

import s from "./reg-form.module.scss";
import {
    validateEmailField,
    validatePasswordField,
    validatePasswordsMatch,
} from "@/logic/validateForm";
import { useState } from "react";
import { PasswordInput } from "../ui/password-input";


const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{
        email: string;
        password: string;
        confirmPassword: string;
    }>({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [touchedFields, setTouchedFields] = useState<{
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
    }>({
        email: false,
        password: false,
        confirmPassword: false,
    });

    const handleBlur = (field: string) => {
        setTouchedFields((prev) => ({
            ...prev,
            [field]: true,
        }));
    };

    const validateConfirmPasswordField = (): string => {
        return validatePasswordsMatch(password, confirmPassword);
    };

    const validateFullForm = (): boolean => {
        const emailError = touchedFields.email ? validateEmailField(email) : "";
        const passwordError = touchedFields.password
            ? validatePasswordField(password)
            : "";

        const confirmPasswordError = touchedFields.confirmPassword
            ? validateConfirmPasswordField()
            : "";

        setErrors({
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        return !emailError && !passwordError && !confirmPasswordError;
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (validateFullForm()) {
            console.log("Форма отправлена");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="4">
                <Field.Root required invalid={!!errors.email}>
                    <Field.Label>
                        Email <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                        variant="outline"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur("email")}
                    />
                    <Field.ErrorText>
                        {touchedFields.email && errors.email && (
                            <span>{errors.email}</span>
                        )}
                    </Field.ErrorText>
                </Field.Root>

                <Field.Root required invalid={!!errors.password}>
                    <Field.Label>
                        Пароль <Field.RequiredIndicator />
                    </Field.Label>
                    <PasswordInput
                        variant="outline"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => handleBlur("password")}
                    />
                    <Field.ErrorText>
                        {touchedFields.password && errors.password && (
                            <span>{errors.password}</span>
                        )}
                    </Field.ErrorText>
                </Field.Root>

                <Field.Root required invalid={!!errors.confirmPassword}>
                    <Field.Label>
                        Повтор пароля <Field.RequiredIndicator />
                    </Field.Label>
                    <PasswordInput
                        variant="outline"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => handleBlur("confirmPassword")}
                    />
                    <Field.ErrorText>
                        {touchedFields.confirmPassword && errors.confirmPassword && (
                            <span>{errors.confirmPassword}</span>
                        )}
                    </Field.ErrorText>
                </Field.Root>

                <Button className={s.loginButton} type="submit">
                    Зарегистрироваться
                </Button>
            </Stack>
        </form>
    );
};

export default RegisterForm;
