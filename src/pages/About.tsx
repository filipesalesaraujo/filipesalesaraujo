import {TextAbout} from "../components/TextAbout";
import {Box, Container, Heading, HStack, Image, Text, useColorModeValue, VStack} from "@chakra-ui/react";

export function About() {

    const bg = useColorModeValue('gray.100', 'gray.800')

    return (
        <Box bg={bg} h='calc(100vh)'>
            <Container w='100%' maxW='container.xl' p='5'>
                <TextAbout/>
            </Container>
        </Box>
    )
}