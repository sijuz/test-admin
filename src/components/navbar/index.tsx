import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import {
    ColorModeButton,
    useColorModeValue,
} from "@/components/ui/color-mode";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../layout";
import s from "./navbar.module.scss";
import { RootState } from "@/store";
import { logout } from "@/store/slices/userSlice";

const NavBar = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);

    const bgNavBar = useColorModeValue("white", "gray.900");

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        dispatch(logout());
        toaster.create({
            title: "Вы вышли из системы.",
            duration: 3000,
            closable: true,
        });

        navigate("/login");
    };

    return (
        <Center className={s.navbar} bg={bgNavBar} boxShadow="sm">
            <Layout>
                <Flex align="center" justify="space-between" className={s.navbarFlexBlock}>
                    <Text textStyle="3xl" fontWeight="bold">CRYPTREND</Text>

                    <Spacer />

                    <ColorModeButton />

                    <Flex align="center" gap={3} className={s.navbarUserInfo}>
                        <Avatar.Root>
                            <Avatar.Fallback
                                name={`${user.first_name} ${user.last_name}`}
                            />
                            <Avatar.Image src={user.photo_url ?? undefined} />
                        </Avatar.Root>
                        <Box>
                            <Text fontWeight="bold">
                                {user.first_name} {user.last_name}
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                @{user.username}
                            </Text>
                        </Box>
                    </Flex>
                    <Button
                        colorPalette={"red"}
                        size="sm"
                        onClick={handleLogout}
                    >
                        <RiLogoutBoxRLine />
                    </Button>
                </Flex>
            </Layout>
        </Center>
    );
};

export default NavBar;
