import React from "react"
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'

const AuthPage: React.FC = () => {
    
    return (
        <Container maxW="lg" height="100vh" alignItems="center" justifyContent="center" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
            <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading>
                    Вход
                </Heading>
                <HStack spacing="1" justify="center">
                    <Text color="muted">У вас нет аккаунта?</Text>
                    <Button variant="link" colorScheme="blue">
                        Зарегестрироваться
                    </Button>
                </HStack>
                </Stack>
            </Stack>
            <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                borderRadius={{ base: 'none', sm: 'xl' }}
            >
                <Stack spacing="6">
                <Stack spacing="5">
                    <FormControl>
                    <FormLabel htmlFor="email">Почта</FormLabel>
                    <Input id="email" type="email" />
                    </FormControl>
                </Stack>
                <Stack spacing="5">
                    <FormControl>
                    <FormLabel htmlFor="password">Пароль</FormLabel>
                    <Input id="password" type="password" />
                    </FormControl>
                </Stack>
                <HStack justify="space-between">
                    <Checkbox defaultChecked>Запомнить</Checkbox>
                    <Button variant="link" colorScheme="blue" size="sm">
                    Забыли пароль?
                    </Button>
                </HStack>
                <Stack spacing="6">
                    <Button colorScheme='blackAlpha'>Войти</Button>
                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Container>
    )
}

export default AuthPage