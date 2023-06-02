import MainLayout from "@/layouts/MainLayout";
import {
  Button,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Submit() {
  return (
    <MainLayout>
      <Heading as="h2" size="md">
        Sumbission rules
      </Heading>
      <UnorderedList
        spacing={{ base: 0, lg: 2 }}
        textAlign="left"
        my={{ base: 3, lg: 6 }}
      >
        <ListItem>Film must be made</ListItem>
        <ListItem>We don&apos;t care how long it is</ListItem>
        <ListItem>We don&apos;t look at creation year</ListItem>
        <ListItem>We don&apos;t give a flying fuck about premieres</ListItem>
        <ListItem>Don&apos;t be a dick</ListItem>
      </UnorderedList>

      <Text my={6}>
        Yes! You can upload anything, as long as you have worked on it,{" "}
        <em>you will be selected</em> and <em>you will get an award!</em>
      </Text>

      <Text>Please, name the film</Text>
      <Heading as="span" size="sm">
        Name-of-the-film(Director, YEAR)
      </Heading>
      <Text mb={6}>and upload it here:</Text>

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
