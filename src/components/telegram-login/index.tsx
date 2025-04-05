import { useEffect, useRef } from "react";
import {
    Box,
    Flex,
    Heading,
    VStack,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";

import s from "./telegram-login.module.scss";

declare global {
    interface Window {
        onTelegramAuth?: any;
    }
}

const TelegramLogin = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        window.onTelegramAuth = (user: any) => {
            toaster.create({
                title: "Вы успешно авторизовались!",
                description: `Привет, ${user.first_name}`,
                duration: 3000,
                type: "success",
                closable: true,
            });

            dispatch(setUser(user));
            navigate("/dashboard");
        };

        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.setAttribute("data-telegram-login", "deepfreeseek_bot");
        script.setAttribute("data-size", "large");
        script.setAttribute("data-userpic", "false");
        script.setAttribute("data-onauth", "onTelegramAuth(user)");
        script.setAttribute("data-request-access", "write");
        script.async = true;

        if (containerRef.current) {
            containerRef.current.innerHTML = "";
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
            delete window.onTelegramAuth;
        };
    }, []);

    return (
        <Box className={s.loginBox}>
            <VStack align="stretch">
                <Heading as="h2" size="lg" textAlign="center">
                    или
                </Heading>
                <Flex ref={containerRef} textAlign="center" justify="center" />
            </VStack>
        </Box>
    );
};

export default TelegramLogin;
