import MainLayout from "@/layouts/MainLayout";
import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Image
        src="Mascot Awards Film Festival 2023 logo.png"
        alt="Mascot Awards Film Festival 2023 logo"
        h="200px"
      />
      <Link href="/submit">
        <Button colorScheme="yellow" mt={12}>
          Submit now!
        </Button>
      </Link>
    </MainLayout>
  );
}
