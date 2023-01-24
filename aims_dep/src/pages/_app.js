import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ChakraProvider, theme } from "@chakra-ui/react";
// nav bar
import Navbar from "components/Navbar";

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Navbar />
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </AuthProvider>
    );
}
