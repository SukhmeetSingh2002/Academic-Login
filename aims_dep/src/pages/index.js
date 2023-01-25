import { Box, Heading, Stack, Button } from "@chakra-ui/react";
import Team from "components/Team";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <Head>
            <title>AIMS</title>
            <meta name="description" content="AIMS" />
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
            <Box
                bg="blue.50"
                w="100%"
                p={4}
                color="white"
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                <Box w="70%" p={4} color="blue.600">
                    <Heading>Welcome</Heading>
                </Box>
                <Box
                    w="30%"
                    p={4}
                    color="white"
                    display={"flex"}
                    flexWrap={"wrap"}
                    justifyContent={"flex-end"}
                >
                    <Stack direction="row" spacing={2} align="end">
                        <Button colorScheme="teal" variant="solid">
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button colorScheme="teal" variant="outline">
                            <Link href="/register">Register</Link>
                        </Button>
                    </Stack>
                </Box>
            </Box>
            <Box
                bg="teal.50"
                w="100%"
                h={"85vh"}
                p={4}
                color="white"
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
                alignContent={"flex-end"}
            >
                <Team />
            </Box>
        </>
    );
}
