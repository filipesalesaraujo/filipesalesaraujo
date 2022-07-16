import {Heading, HStack, Image, Text, useColorModeValue, VStack} from "@chakra-ui/react";

const profile = new URL('../assets/profile.png', import.meta.url).href

export function TextAbout() {

    const textColor = useColorModeValue('gray.800', 'gray.100')
    const buttonVariant = useColorModeValue('solid', 'outline')

    return (
        <HStack gap='5'>
            <Image boxSize='sm' borderRadius='10' src={profile}/>
            <VStack gap='5' align='left'>
                <Heading color={textColor} as='h1' noOfLines={1}>
                    A little about myself
                </Heading>
                <Text color={textColor} fontSize='2xl'>
                    Full-stack developer with more than three years of experience in the website and application
                    development market. With a portfolio composed of more than 50 projects in production, I am an expert
                    in front-end development.
                </Text>
            </VStack>
        </HStack>
    )
}