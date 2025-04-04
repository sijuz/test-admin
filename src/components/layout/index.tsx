import { Container } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="1300px" px={4} py={6}>
      {children}
    </Container>
  );
};

export default Layout;