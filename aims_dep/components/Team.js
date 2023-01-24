import { Box, Heading, Text } from "@chakra-ui/react";


const Team = () => {
    return (
        <>
            <Box w="100%" p={4} color={"green.800"}>
                <Heading> Team id : T07</Heading>
            </Box>
            <Box w="100%" p={4} color={"blue.800"}>
                <Heading>Team Members</Heading>
                <Box w="100%" p={4} color={"blue.800"}>
                    <Text fontSize="2xl">Sukhmeet Singh(2020CSB1129)</Text>
                    <Text fontSize="2xl">Vishnusai Janjanam (2020CSB1142)</Text>
                    <Text fontSize="2xl">Sourabh Sanganwar(2020CSB1121)</Text>
                    <Text fontSize="2xl">Sumit Kumar(2020CSB1131)</Text>
                </Box>
            </Box>
        </>
    );
};

export default Team;
