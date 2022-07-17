import {Box, Flex, Heading, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import {SiGraphql, SiReact, SiWordpress} from "react-icons/all";

export function MainTechnologies() {

    const border = useColorModeValue('gray.800', 'gray.100')


    return (
        <Box mb='20'>
            <VStack align='left'>
                <Heading mb='5'>Main technologies</Heading>
                <Flex gap='5'>
                    <VStack align='left' gap='5' border='1px' borderRadius='6px' borderColor={border} p='5'>
                        <Flex alignItems='center' gap='5'>
                            <SiReact size={100} color='#61dafb'/>
                            <Heading>React</Heading>
                        </Flex>
                        <VStack align='left'>
                            <Text fontSize='2xl'>
                                React is a component based library which is deployed for the development of
                                interactive user interfaces. Currently it is the most popular front-end JS library. It
                                incorporates the view (V) layer in M-V-C (Model View Controller) pattern. It is
                                supported by Facebook, Instagram and a community of individual developers and
                                organisations.
                            </Text>
                            <Text fontSize='xx-small' align='right'>
                                AGGARWAL, S. <strong>International Journal of Recent Research Aspects</strong>: Modern
                                Web-Development using ReactJS. Vol. 5, 2018.
                            </Text>
                        </VStack>
                    </VStack>

                    <VStack align='left' gap='5' border='1px' borderRadius='6px' borderColor={border} p='5'>
                        <Flex alignItems='center' gap='5'>
                            <SiGraphql size={100} color='#e10098'/>
                            <Heading>GraphQL</Heading>
                        </Flex>
                        <VStack align='left'>
                            <Text fontSize='2xl'>
                                GraphQL is a query language especially suited for highly linked data models used by
                                GitHub, Twitter. The FHIR standard it- self introduced GraphQL as a query alternative to
                                REST APIs. Technically, GraphQL functions as a database abstraction layer providing a
                                single API endpoint both for queries and mutations. The provided information ob- jects
                                are defined in a schema, which has an expressive coverage, supports inheritance,
                                interfaces, custom types and attribute constraints such as non-nullable entries.
                            </Text>
                            <Text fontSize='xx-small' align='right'>
                                ULRICH, H; kern J; TAS .D; KOCK-SCHOPPENHAUER .AK; ÜCKERT .F; INGENERF .J; LABLANS
                                .M. <strong>BMC Medical Informatics and Decision Making</strong>: QL 4 MDR: a GraphQL
                                query language for
                                ISO 11179-based metadata repositories. Vol. 19, 2019.
                            </Text>
                        </VStack>
                    </VStack>


                </Flex>
                <VStack align='left' gap='5' border='1px' borderRadius='6px' borderColor={border} p='5'>
                    <Flex alignItems='center' gap='5'>
                        <SiWordpress size={100} color='#0073aa'/>
                        <Heading>Headless WordPress</Heading>
                    </Flex>
                    <VStack align='left'>
                        <Text fontSize='2xl'>
                            WordPress content may be needed on channels other than the website, and so a monolithic
                            solution strictly tied to the site structure is no longer necessarily the best. The solution
                            to this is to separate the content management and UI layer used to present the content. This
                            is where the term 'headless' is used.
                        </Text>
                        <Text fontSize='xx-small' align='right'>
                            STENROOS, J. <strong>Headless WordPress development with React using Gatsby.js</strong>. 2019.
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}