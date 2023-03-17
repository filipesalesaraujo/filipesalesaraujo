import {ChakraBaseProvider, extendBaseTheme} from '@chakra-ui/react'
import {Header} from "./templates/Header";
import {Footer} from "./templates/Footer";
import {Home} from "./templates/Home";

export default function App() {
    return (
        <ChakraBaseProvider>
            <Header />
            <Home />
            <Footer />
        </ChakraBaseProvider>
    )
}
