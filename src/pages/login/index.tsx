import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TelegramLoginForm from "@/components/login-form";

import s from "./login.module.scss";
import { useColorModeValue } from "@/components/ui/color-mode";

const LoginPage = () => {
    const bgBox = useColorModeValue("white", "gray.800");

    return (
        <Flex className={s.container}>
            <Box className={s.containerBox} bg={bgBox}>
                <Text textStyle="3xl" fontWeight="bold" mb={6}>
                    CRYPTREND
                </Text>
                <Heading mb={4}>Добро пожаловать</Heading>
                <Text mb={6} color="gray.600">
                    Войдите через Telegram, чтобы получить доступ в админку
                </Text>

                <TelegramLoginForm />
            </Box>
        </Flex>
    );
};

export default LoginPage;
