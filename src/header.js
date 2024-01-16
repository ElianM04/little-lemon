import { Button, Flex, Link, Link as ChakraLink, Spacer, Container} from "@chakra-ui/react";
import { Box, Image, Text } from '@chakra-ui/react';


const Header = () => {
  return (
  <>
      <Container textAlign="center" padding="20px" maxW='61.625rem'>
      <Flex align="center" justify="space-between">
        {/* Text Section */}
        <Box align='left'>
          <Text color="yellow" fontSize="4xl" fontWeight="bold">
            Little lemon
          </Text>
          
          <Text fontSize="md" color="white" mt="2">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </Text>
          <Text fontSize="2xl" color="white" mt="2" pt='5'>
        Chicago         
         </Text>
          <ChakraLink as={Link} to="/reservations">
              <Button colorScheme="yellow" mt="4" alignt='center'>
                Reserve a Table
              </Button>
          </ChakraLink>
       </Box>
<Spacer/>
        <Image
          src="/restauranfood.jpg"
          alt="Centered"
          height="416px"
          width='1113px'
          objectFit="cover"
          borderRadius='lg'
          ml='100px'
        />

      </Flex>
    </Container>
  </>
  );
};

export default Header;
  
