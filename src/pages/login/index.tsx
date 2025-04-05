import { Box, Flex, Heading, Tabs, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { LuUser, LuFolder, LuLogIn, LuUserPlus } from "react-icons/lu";

import s from "./login.module.scss";
import LoginForm from "@/components/login-form";
import RegisterForm from "@/components/reg-form";
import TelegramLogin from "@/components/telegram-login";

const LoginPage = () => {
    const bgBox = useColorModeValue("white", "gray.900");

    return (
        <Flex className={s.container}>
            <Box className={s.containerBox} bg={bgBox}>
                <Text textStyle="3xl" fontWeight="bold" mb={6}>
                    CRYPTREND
                </Text>
                {/* <Heading mb={4}>Добро пожаловать</Heading> */}
                {/* <Text mb={6} color="gray.600">
                    Войдите через Telegram, чтобы получить доступ в админку
                </Text> */}

                <Tabs.Root defaultValue="login" variant="enclosed">
                    <Tabs.List>
                        <Tabs.Trigger value="login">
                            <LuLogIn />
                            Вход
                        </Tabs.Trigger>
                        <Tabs.Trigger value="reg">
                            <LuUserPlus />
                            Регистрация
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="login">
                        <LoginForm />
                    </Tabs.Content>
                    <Tabs.Content value="reg">
                        <RegisterForm />
                    </Tabs.Content>
                </Tabs.Root>

                <TelegramLogin/>
            </Box>
        </Flex>
    );
};

export default LoginPage;
