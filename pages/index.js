import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="#b4d241" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Korea!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            jydev
          </Heading>
          <p>Freelance Programmer ( React-Native / React / JAVA )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
