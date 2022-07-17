import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack, IconButton,
    Menu,
    MenuButton, MenuItem, MenuList,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

import {ChevronDownIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'

export function Header() {

    const {colorMode, toggleColorMode} = useColorMode()

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')
    const buttonVariant = useColorModeValue('solid', 'outline')

    return (
        <Box bg={bg} borderBottom='1px' borderColor='gray.300'>
            <Container w='100%' maxW='container.xl' p='5'>
                <Flex gap='5' justify='space-between' display={{base: 'none', lg: 'flex'}}>
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
                        <Button colorScheme='blue' variant={buttonVariant} onClick={toggleColorMode} size='lg'>
                            {colorMode === 'light' ? <MoonIcon color="gray.100"/> : <SunIcon color="gray.100"/>}
                        </Button>
                    </Flex>
                </Flex>
                <Flex gap='5' justify='space-between' display={{base: 'flex', lg: 'none'}}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon/>}
                            colorScheme='blue' variant={buttonVariant}
                            size='lg'
                        />
                        <MenuList>
                            <MenuItem>
                                <NavLink to="/" title="Home">Home</NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/about" title="About">About</NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink to="/contact" title="Contact">Contact</NavLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Button colorScheme='blue' variant={buttonVariant} onClick={toggleColorMode} size='lg'>
                        {colorMode === 'light' ? <MoonIcon color="gray.100"/> : <SunIcon color="gray.100"/>}
                    </Button>
                </Flex>
            </Container>
        </Box>
    )
}