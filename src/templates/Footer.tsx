import {Flex, Link, VStack} from "@chakra-ui/react";

export function Footer() {
    return (
        <Flex as="header"
              justifyContent="center"
              backgroundColor="blue.50"
        >
            <VStack
                maxW="1200px"
                w="full"
                p={5}
            >
                <Link fontSize="xl" href="mailto:filipesalesaraujo@gmail.com">filipesalesaraujo@gmail.com</Link>
            </VStack>
        </Flex>
    )
}