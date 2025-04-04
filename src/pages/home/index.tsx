import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "@/components/navbar";

import s from "./home.module.scss";
import Layout from "@/components/layout";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
    const user = useSelector((state: RootState) => state.user);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.first_name) {
            navigate("/login");
        }
    }, [user]);

    return (
        <>
            <NavBar />

            <Layout>
                <Flex className={s.wrapper}>
                    <Box className={s.wrapperBox}>
                        <Box p={6}>
                            <Text fontSize="xl" fontWeight="semibold">
                                Добро пожаловать, {user.first_name}!
                            </Text>
                            <Text color="gray.600" mt={2}>
                                Здесь будет отображаться полезная информация или
                                админские функции.
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Layout>
        </>
    );
};

export default HomePage;
