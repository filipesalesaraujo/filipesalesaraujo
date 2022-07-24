import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Form } from '../components/Form'
import { CgFramer } from 'react-icons/all'

export function Tests() {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box bg={bg}>
      <Container w="100%" maxW="container.xl" p="5">
        <Heading mb="20" as="h1">
          Testing libraries and frameworks.
        </Heading>

        <VStack align="left" gap="5" mb="20">
          <VStack align="left" p="5" border="1px" borderRadius={6}>
            <HStack>
              <CgFramer size={100} color="#a2e" />
              <Heading as="h2" mb={5}>
                Framer Motion
              </Heading>
            </HStack>
            <Text fontSize="2xl" mb="5">
              Framer Motion is a production-ready motion library for React from
              Framer. It`s simple yet powerful, allowing complex user
              interactions with robust, semantic markup.
            </Text>
            <Box>
              <NavLink to="/tests/framer-motion" title="Framer Motion">
                <Button colorScheme="blue">View more</Button>
              </NavLink>
            </Box>
          </VStack>
        </VStack>

        <Form />
      </Container>
    </Box>
  )
}
