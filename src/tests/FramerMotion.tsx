import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

import {
  isValidMotionProp,
  motion,
  Reorder,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useRef, useState } from 'react'
import { CgFramer } from 'react-icons/all'

const ChakraFramerMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

export function FramerMotion() {
  const bg = useColorModeValue('gray.100', 'gray.800')

  const constraintsRef = useRef(null)

  const [active, setActive] = useState(false)
  const [isOn, setIsOn] = useState(false)

  function handleActive() {
    setActive(!active)
  }

  function handleIsOn() {
    setIsOn(!isOn)
  }

  const card = new URL('../assets/back-card-yu-gi-oh.png', import.meta.url).href

  const cardObelisk = new URL(
    '../assets/card-yu-gi-oh-obelisk-the-tormentor.jpg',
    import.meta.url,
  ).href

  const cardSlifer = new URL(
    '../assets/card-yu-gi-oh-slifer-the-sky-dragon.jpg',
    import.meta.url,
  ).href

  const cardDragoOfRa = new URL(
    '../assets/card-yu-gi-oh-the-winged-dragon-of-ra.jpg',
    import.meta.url,
  ).href

  const cardWhiteDragon = new URL(
    '../assets/card-yu-gi-oh-blue-eyes-white-dragon.jpg',
    import.meta.url,
  ).href

  const cardUltimateDarkDragon = new URL(
    '../assets/card-yu-gi-oh-blue-eyes-ultimate-dark-dragon.jpg',
    import.meta.url,
  ).href

  const cardUltimateDespairDragon = new URL(
    '../assets/card-yu-gi-oh-cxyz-golden-eyes-ultimate-despair-dragon.jpg',
    import.meta.url,
  ).href

  const cardLegendaryBlackDragon = new URL(
    '../assets/card-yu-gi-oh-legendary-red-eyes-black-dragon.jpg',
    import.meta.url,
  ).href

  const cardDragonMasterKnight = new URL(
    '../assets/card-yu-gi-oh-dragon-master-knight.jpg',
    import.meta.url,
  ).href

  const [items, setItems] = useState([cardObelisk, cardSlifer, cardDragoOfRa])

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  return (
    <Box bg={bg}>
      <Container w="100%" maxW="container.xl" p="5">
        <HStack>
          <CgFramer size={100} color="#a2e" />
          <Heading mb={5}>Framer Motion</Heading>
        </HStack>
        <Text fontSize="2xl" mb={5}>
          Framer Motion is a production-ready motion library for React from
          Framer. It`s simple yet powerful, allowing complex user interactions
          with robust, semantic markup.
        </Text>
        <VStack gap={5} alignItems="start">
          <Heading>Keyframes</Heading>
          <Flex
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              animate={{
                scale: [0.5, 1, 1, 0.5, 0.5],
                rotate: [0, 0, 270, 270, 0],
              }}
              // @ts-ignore
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <Box
                borderRadius={6}
                w={200}
                h={290}
                backgroundImage={card}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
          </Flex>
          <Heading>Gesture animations</Heading>
          <Flex
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              whileHover={{
                scale: 1.3,
                borderRadius: '50%',
              }}
              whileTap={{
                scale: 0.5,
                borderRadius: '20%',
              }}
            >
              <Box
                borderRadius={6}
                cursor="pointer"
                w={200}
                h={290}
                backgroundImage={card}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
          </Flex>
          <Heading>Drag</Heading>
          <Flex
            ref={constraintsRef}
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={5}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              drag
              dragConstraints={constraintsRef}
              color="yellow.500"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                borderRadius={6}
                cursor="grab"
                w={200}
                h={290}
                backgroundImage={card}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
            <ChakraFramerMotionBox
              drag
              dragConstraints={constraintsRef}
              color="yellow.500"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                borderRadius={6}
                cursor="grab"
                w={200}
                h={290}
                backgroundImage={card}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
          </Flex>
          <Heading>Animating state changes</Heading>
          <VStack
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={5}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              animate={active ? { rotate: 90 } : { rotate: 0 }}
            >
              <Image src={card} alt="" />
            </ChakraFramerMotionBox>
            <Button colorScheme="blue" onClick={handleActive}>
              {active ? (
                <Text>Switch to Attack Mode</Text>
              ) : (
                <Text>Switch to Defense Mode</Text>
              )}
            </Button>
          </VStack>
          <Heading>Reorder</Heading>
          <Flex
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            border="1px"
            borderRadius={6}
          >
            <Reorder.Group axis="x" values={items} onReorder={setItems}>
              <HStack gap={5}>
                {items.map((item) => (
                  <Reorder.Item
                    key={item}
                    value={item}
                    style={{ listStyle: 'none' }}
                  >
                    <Box
                      borderRadius={6}
                      cursor="grab"
                      w={200}
                      h={290}
                      backgroundImage={item}
                      backgroundSize="cover"
                    />
                  </Reorder.Item>
                ))}
              </HStack>
            </Reorder.Group>
          </Flex>
          <Heading>Layout animations</Heading>
          <VStack
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={5}
            border="1px"
            borderRadius={6}
          >
            <Flex onClick={handleIsOn}>
              <ChakraFramerMotionBox
                display="flex"
                w={670}
                justifyContent={isOn ? 'flex-end' : 'flex-start'}
              >
                {isOn ? (
                  <ChakraFramerMotionBox
                    layout
                    // @ts-ignore
                    transition={{
                      type: 'spring',
                      stiffness: 700,
                      damping: 30,
                    }}
                  >
                    <Box
                      borderRadius={6}
                      cursor="pointer"
                      w={200}
                      h={290}
                      backgroundImage={cardWhiteDragon}
                      backgroundSize="cover"
                    />
                  </ChakraFramerMotionBox>
                ) : (
                  <ChakraFramerMotionBox
                    layout
                    // @ts-ignore
                    transition={{
                      type: 'spring',
                      stiffness: 700,
                      damping: 30,
                    }}
                  >
                    <Box
                      borderRadius={6}
                      cursor="pointer"
                      w={200}
                      h={290}
                      backgroundImage={card}
                      backgroundSize="cover"
                    />
                  </ChakraFramerMotionBox>
                )}
              </ChakraFramerMotionBox>
            </Flex>
          </VStack>
          <Heading>Hover animations</Heading>
          <HStack
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={5}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: [1, 1.4, 1.2],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Box
                borderRadius={6}
                cursor="pointer"
                w={200}
                h={290}
                backgroundImage={cardUltimateDarkDragon}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>{' '}
            <ChakraFramerMotionBox
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: [1, 1.4, 1.2],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Box
                borderRadius={6}
                cursor="pointer"
                w={200}
                h={290}
                backgroundImage={cardUltimateDespairDragon}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
            <ChakraFramerMotionBox
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: [1, 1.4, 1.2],
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Box
                borderRadius={6}
                cursor="pointer"
                w={200}
                h={290}
                backgroundImage={cardLegendaryBlackDragon}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
          </HStack>

          <Heading>Drag: 3D transform</Heading>
          <HStack
            w="full"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
            p={20}
            gap={5}
            border="1px"
            borderRadius={6}
          >
            <ChakraFramerMotionBox
              style={{
                cursor: 'grab',
                x,
                y,
                rotateX,
                rotateY,
              }}
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={0.6}
              whileTap={{ cursor: 'grabbing' }}
            >
              <Box
                borderRadius={6}
                w={200}
                h={290}
                backgroundImage={cardDragonMasterKnight}
                backgroundSize="cover"
              />
            </ChakraFramerMotionBox>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
