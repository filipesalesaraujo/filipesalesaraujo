import {Box, Heading, Image, Stack, Text, useColorModeValue, VStack} from "@chakra-ui/react";

const profile = new URL('../assets/profile.png', import.meta.url).href

export function TextAbout() {

    return (
        <Box>
            <Stack gap='5' flexDir={{base: 'column', lg: 'row'}} mb='20'>
                <Image boxSize='sm' h="auto" borderRadius='10' src={profile}/>
                <VStack gap='5' align='left'>
                    <Heading as='h1'>
                        A little about myself
                    </Heading>
                    <Text fontSize='2xl'>
                        Graduated in Physical Education from Universidade Estácio de Sá, he is currently studying
                        Computer
                        Science at Universidade Anhembi Morumbi. I worked as a physical education teacher in the
                        municipal
                        education network of São Paulo and in the state education network of the state of São Paulo, and
                        I
                        was a bodybuilding and swimming coach.
                    </Text>
                    <Text fontSize='2xl'>I specialize in React and Headless WordPress development.</Text>
                </VStack>
            </Stack>
            <VStack align='left' gap='5' mb='20'>
                <Heading as='h1'>
                    Front end web developer
                </Heading>
                <Text fontSize='2xl'>
                    I develop websites and applications according to the wishes and needs of the client and the
                    principles of the overarching theme of design. In this development, public appearance, organization
                    functionality and design principles or website interface are made. During development, brainstorming
                    is done on the creative and technical design of the website and app. A basic web page structure, or
                    architecture, is designed, and fonts, colors, graphics, and other visual elements are selected to
                    creatively apply that architecture.
                </Text>
            </VStack>
            <VStack align='left' gap='5'>
                <Heading as='h1'>
                    In addition to the visual, it is necessary to have accessibility
                </Heading>
                <Text fontSize='2xl'>
                    My course conclusion work <strong>Application and benefits of flag football in physical education
                    classes</strong> (soon available), I wrote about people with disabilities, and their inclusion in
                    the practice of physical activity. Access to technology must be accessible to all, web developers
                    have an obligation to develop websites that are accessible and usable by the widest range of users,
                    including people with disabilities.
                </Text>
            </VStack>
        </Box>
    )
}