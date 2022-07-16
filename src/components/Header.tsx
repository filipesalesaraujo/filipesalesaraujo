import {Box, Button, Container, Flex, Heading, HStack, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

import { MoonIcon } from '@chakra-ui/icons'

export function Header() {

    const {colorMode, toggleColorMode} = useColorMode()

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')
    const buttonVariant = useColorModeValue('solid', 'outline')

    return (
        <Box bg={bg} borderBottom='1px' borderColor='gray.300'>
            <Container w='100%' maxW='container.xl' p='5'>
                <Flex gap='5' justify='space-between'>
                    <Heading color={textColor} as='h1' size='xl'>Filipe Sales Araujo</Heading>
                    <Flex gap='5'>
                        <NavLink to="/" title="Home">
                            <Button colorScheme='blue' variant={buttonVariant} size='lg'>Home</Button>
                        </NavLink>
                        <NavLink to="/about" title="About">
                            <Button colorScheme='blue' variant={buttonVariant} size='lg'>About</Button>
                        </NavLink>
                        <NavLink to="/contact" title="Contact">
                            <Button colorScheme='blue' variant={buttonVariant} size='lg'>Contact</Button>
                        </NavLink>
                        <HStack>
                            <Button colorScheme='blue' variant={buttonVariant} onClick={toggleColorMode} size='lg'>
                                {colorMode === 'light' ? <MoonIcon color="gray.800" /> : <MoonIcon color="gray.100" />}
                            </Button>
                        </HStack>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}