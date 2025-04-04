import { Button, Checkbox, Field, Input, Stack } from "@chakra-ui/react";

import s from "./login-form.module.scss";
import { useState } from "react";
import { PasswordInput } from "../ui/password-input";
import { validateEmailField, validatePasswordField } from "@/logic/validateForm";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const [touchedFields, setTouchedFields] = useState<{
        email: boolean;
        password: boolean;
    }>({
        email: false,
        password: false,
    });

    const handleBlur = (field: string) => {
        setTouchedFields((prev) => ({
            ...prev,
            [field]: true,
        }));
    };

    const validateFullForm = (): boolean => {
        const emailError = touchedFields.email ? validateEmailField(email) : "";
        const passwordError = touchedFields.password
            ? validatePasswordField(password)
            : "";

        setErrors({
            email: emailError,
            password: passwordError,
        });

        return !emailError && !passwordError;
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (validateFullForm()) {
            console.log("Форма отправлена");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="4" className={s.login}>
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

                <Checkbox.Root
                    checked={rememberMe}
                    className={s.loginRemember}
                    onChange={() => setRememberMe(!rememberMe)}
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Запомнить меня</Checkbox.Label>
                </Checkbox.Root>

                <Button className={s.loginButton} type="submit">
                    Войти
                </Button>
            </Stack>
        </form>
    );
};

export default LoginForm;
