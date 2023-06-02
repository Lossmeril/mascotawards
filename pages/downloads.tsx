import MainLayout from "@/layouts/MainLayout";
import { Button, Heading, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Downloads() {
  return (
    <MainLayout>
      <Heading as="h2" size="md" mb={4}>
        Get your official selection laurels!
      </Heading>
      <HStack w="100%" justify="center" alignContent="center">
        <Link href="selection-wreath-black.png" target="_blank">
          <Image src="selection-wreath-black.png" alt="" width="250px" p={4} />
        </Link>
        <Link href="selection-wreath-white.png" target="_blank">
          <Image
            src="selection-wreath-white.png"
            alt=""
            width="250px"
            p={4}
            className="black-bg-img"
          />
        </Link>
      </HStack>

      <Heading as="h2" size="md" mt={12} mb={4}>
        Download the official poster!
      </Heading>
      <HStack w="100%" justify="center" alignContent="center">
        <Link
          href="Mascot Awards Film Festival 2023 poster.png"
          target="_blank"
        >
          <Image
            src="Mascot Awards Film Festival 2023 poster.png"
            alt=""
            width="150px"
          />
        </Link>
      </HStack>

      <Link href="/">
        <Button colorScheme="yellow" mt={12}>
          Fuck, go back!
        </Button>
      </Link>
    </MainLayout>
  );
}
