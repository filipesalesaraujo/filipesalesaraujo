import {Box, Container, Heading, Text, useColorModeValue} from "@chakra-ui/react";

import {Form} from "../components/Form";
import {Technologies} from "../components/Technologies";
import {MainTechnologies} from "../components/MainTechnologies";
import {Architectural} from "../components/Architectural";

export function Home() {

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')

    return (
        <Box bg={bg}>
            <Container w='100%' maxW='container.xl' p='5'>
                <Box mb='20'>
                    <Heading color={textColor} as='h1' mb='5'>Hello World!</Heading>
                    <Text color={textColor} fontSize='2xl' mb='5'>
                        Full-stack developer with more than three years of experience in the website and application
                        development market. With a portfolio composed of more than 50 projects in production, I am an
                        expert in front-end development.
                    </Text>
                </Box>
                <MainTechnologies/>
                <Architectural/>
                <Technologies/>
                <Form/>

            </Container>
        </Box>
    )
}