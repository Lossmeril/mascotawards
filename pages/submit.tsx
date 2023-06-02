import MainLayout from "@/layouts/MainLayout";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Submit() {
  return (
    <MainLayout>
      <iframe
        width="183"
        height="48"
        frameBorder="0"
        src="https://mega.nz/filerequest#!Ou0p6oyPeQs!d!en"
      ></iframe>

      <Link href="/">
        <Button colorScheme="yellow" mt={12}>
          Fuck, go back!
        </Button>
      </Link>
    </MainLayout>
  );
}
