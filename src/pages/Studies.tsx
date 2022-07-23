import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Form } from '../components/Form'

export function Studies() {
  const bg = useColorModeValue('gray.100', 'gray.800')

  return (
    <Box bg={bg}>
      <Container w="100%" maxW="container.xl" p="5">
        <Heading mb="20" as="h1">
          I am making my studies available on the site for anyone interested in
          understanding how I carry out research and literary reviews.
        </Heading>

        <VStack align="left" gap="5" mb="20">
          <VStack align="left" p="5" border="1px" borderRadius={6}>
            {/* <Text>Jul 17, 2022</Text> */}
            <Heading as="h2">
              The importance of accessibility in websites and applications
            </Heading>
            <Text fontSize="2xl" mb="5">
              Study on accessibility in websites and applications.
            </Text>
            <Box>
              <Button colorScheme="blue" disabled>
                Coming soon
              </Button>
              {/* <NavLink to='/studies/is-seo-important' title='Is SEO important?'> */}
              {/*    <Button colorScheme="blue">Read more</Button> */}
              {/* </NavLink> */}
            </Box>
          </VStack>

          <VStack align="left" p="5" border="1px" borderRadius={6}>
            <Text>Jul 17, 2022</Text>
            <Heading as="h2">Is SEO important?</Heading>
            <Text fontSize="2xl" mb="5">
              Study on the importance of SEO.
            </Text>
            <Box>
              <NavLink to="/studies/is-seo-important" title="Is SEO important?">
                <Button colorScheme="blue">Read more</Button>
              </NavLink>
            </Box>
          </VStack>
        </VStack>

        <Form />
      </Container>
    </Box>
  )
}
