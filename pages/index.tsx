import MainLayout from "@/layouts/MainLayout";
import {
  Button,
  Heading,
  Image,
  VisuallyHidden,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <VisuallyHidden>
        <Heading as="h1">Mascot Awards Film Festival 2023</Heading>
      </VisuallyHidden>
      <Box>
        <Image
          src="Mascot Awards Film Festival 2023 logo.png"
          alt="Mascot Awards Film Festival 2023 logo"
          h={{ base: "150px", lg: "200px" }}
          mx="auto"
        />
      </Box>
      <Box>
        <Heading
          as="h2"
          size={{ base: "md", lg: "lg" }}
          mt={{ base: 6, lg: 12 }}
          mb={4}
        >
          This festival got balls!
        </Heading>
        <Text mb={2}>
          Tired of bullshit rules when sumbitting to festivals?
        </Text>
        <Text mb={2}>
          Tired of paying ridiculous fees just to be ghosted by a BAFTA
          qualifying festival?
        </Text>
        <Text mb={2}>
          <em>Mascot Awards Film Festival</em> is an unique event mady by
          filmmakers for filmmakers! <em>Everyone gets an award!</em>
        </Text>
      </Box>
      <VStack spacing={6} mt={6}>
        <Link href="/submit">
          <Button colorScheme="yellow">Submit now!</Button>
        </Link>
        <Link href="/downloads">
          <Button colorScheme="yellow">Download poster / laurels</Button>
        </Link>
      </VStack>
    </MainLayout>
  );
}
