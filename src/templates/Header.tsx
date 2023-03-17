import {Box, Flex, Image, Text, VStack} from "@chakra-ui/react";

const duck = new URL('../assets/images/duck.png', import.meta.url).href

export function Header() {
    return (
        <Flex as="header"
              justifyContent="center"
              bgColor="blue.50"
        >
            <VStack
                maxW="1200px"
                w="full"
                p={5}
            >
                <Image src={duck}/>
            </VStack>
        </Flex>
    )
}