import {Box, Container, Heading, Text, useColorMode, useColorModeValue} from "@chakra-ui/react";


import {Form} from "../components/Form";
import {Technologies} from "../components/Technologies";

export function Home() {

    const bg = useColorModeValue('gray.100', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'gray.100')

    return (
        <Box bg={bg} >
            <Container w='100%' maxW='container.xl' p='5'>
                <Box mb='20'>
                    <Heading color={textColor} as='h1' mb='5'>Hello World!</Heading>
                    <Text color={textColor} fontSize='2xl' mb='5'>
                        Meet my development stacks.
                    </Text>
                </Box>

                <Technologies/>
                <Form/>

            </Container>
        </Box>
    )
}