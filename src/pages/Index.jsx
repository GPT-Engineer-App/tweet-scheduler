import React from "react";
import { Box, Button, Text, VStack, Image, useColorMode, IconButton, Heading } from "@chakra-ui/react";
import { FaTwitter, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack minH="100vh" justify="center" align="center" p={4}>
      <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} mb={4} />
      <Box textAlign="center">
        <Heading mb={4}>Welcome to Mini-Twitter!</Heading>
        <Text fontSize="xl" mb={4}>
          A simple React and Chakra UI example.
        </Text>
        <Button leftIcon={<FaTwitter />} colorScheme="twitter" size="lg">
          Connect with Twitter
        </Button>
      </Box>
      <Image src="https://images.unsplash.com/photo-1611605698335-8b1569810432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d2l0dGVyJTIwbG9nb3xlbnwwfHx8fDE3MTM0ODgzNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" alt="Twitter Logo" mt={4} />
    </VStack>
  );
};

export default Index;
