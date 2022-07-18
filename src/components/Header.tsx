import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

import {HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'

export function Header() {

    const {colorMode, toggleColorMode} = useColorMode()

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')
    const buttonVariant = useColorModeValue('solid', 'outline')
    const buttonModeColor = useColorModeValue('gray.800', 'gray.800')
    const buttonBorderColor = useColorModeValue('red.800', 'yellow.500')
    const iconModeColor = useColorModeValue('gray.100', 'yellow.500')

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
                        <NavLink to="/studies" title="Studies">
                            <Button colorScheme='blue' variant={buttonVariant} size='lg'>Studies</Button>
                        </NavLink>
                        <Button bg={buttonModeColor} border='1px' borderColor={buttonBorderColor}
                                onClick={toggleColorMode} size='lg' _hover={{background: 'gray.800'}}>
                            {colorMode === 'light' ? <MoonIcon color={iconModeColor}/> :
                                <SunIcon color={iconModeColor}/>}
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
                            <MenuItem>
                                <NavLink to="/studies" title="Studies">Studies</NavLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Button bg={buttonModeColor} border='1px' borderColor={buttonBorderColor}
                            onClick={toggleColorMode} size='lg' _hover={{background: 'gray.800'}}>
                        {colorMode === 'light' ? <MoonIcon color={iconModeColor}/> :
                            <SunIcon color={iconModeColor}/>}
                    </Button>
                </Flex>
            </Container>
        </Box>
    )
}