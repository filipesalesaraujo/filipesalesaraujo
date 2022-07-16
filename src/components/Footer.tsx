import {Box, Button, Container, Flex, Heading, useColorModeValue} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {SiGithub, SiLinkedin} from "react-icons/all";

export function Footer() {

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')

    return (
        <Box bg={bg} borderTop='1px' borderColor={textColor}>
            <Container w='100%' maxW='container.xl' p='5'>
                <Flex justify='center' gap='5'>
                    <a href="https://github.com/filipesalesaraujo" target='_blank'><SiGithub size={25}/></a>
                    <a href="https://www.linkedin.com/in/filipesales21/" target='_blank'><SiLinkedin size={25}/></a>
                </Flex>
            </Container>
        </Box>
    )
}