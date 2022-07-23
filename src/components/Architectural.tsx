import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { SiJamstack } from 'react-icons/all'

export function Architectural() {
  return (
    <Box mb="20">
      <VStack align="left" gap="5">
        <Heading>Web development architecture with Jamstack</Heading>
        <Flex gap="5" flexDir={{ base: 'column', md: 'row' }}>
          <Box mt="3">
            <SiJamstack size={100} color="#f0047f" />
          </Box>
          <VStack align="left" gap="1">
            <Text fontSize="2xl">
              This modern web architecture delivers the quick load times of
              static sites along with the dynamic functionality you need for
              user-friendly interactive features. Built with lightweight
              standards and tools, Jamstack sites are fast, secure, easy to
              maintain, and naturally optimized for mobile and SEO.
            </Text>
            <Text fontSize="xx-small" align="right">
              RAYMOND, C.; BRIAN, R.; <strong>The Jamstack Book</strong>: Beyond
              static sites with JavaScript, APIs, and markup. Manning, 2022.
            </Text>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  )
}
