import React from 'react';
import {
  Box,
  
  SimpleGrid,
  Image,
  Text,
  Container,
} from '@chakra-ui/react';

const ReviewCard = ({ imageSrc, reviewerName, review }) => (
  <Box textAlign="center" p="4" bg="white" boxShadow="md" borderRadius="md">
    <Image src={imageSrc} alt={reviewerName} mb="4" borderRadius="full" boxSize="80px"  />
    <Text fontWeight="bold" fontSize="lg" mb="2">
      {reviewerName}
    </Text>
    <Text>{review}</Text>
    
  </Box>
);

const ReviewsSection = () => {
  return (
    <>
    <Container>
    <Text fontSize='2xl' align='center' color='white' pt='50px' fontFamily='Markazi Text'>What people say about us </Text>
    </Container>

    <Container maxW="container.lg" mt="8"  alignSelf='center' p='10'>
      <SimpleGrid columns={[1,null, 2, 3]} spacing="8">
        <ReviewCard
          imageSrc="/1659026711602.jpeg"
          reviewerName="John Doe"
          review="Little Lemon is a hidden gem! The flavors transported me straight to Italy. The pasta was perfectly al dente, and the tomato sauce tasted like it was made with love. The cozy atmosphere and friendly staff made the experience memorable. Can't wait to come back for more!"
        />
        <ReviewCard
          imageSrc="/jane smith.jpeg"
          reviewerName="Jane Smith"
          review="I had the most delightful evening at Little Lemon. The ambiance was charming, and the aroma of freshly baked pizza and herbs filled the air. The staff was attentive, and my risotto was a burst of flavors. A true taste of Italy right in our neighborhood. Highly recommended!"
        />
        <ReviewCard
          imageSrc="fish.jpg"
          reviewerName="Alice Johnson"
          review="Little Lemon surpassed my expectations! The authentic Italian dishes were a delight to my taste buds. The homemade tiramisu was the perfect ending to a fantastic meal. The staff's warmth and attention to detail made the experience exceptional. Little Lemon is now my go-to Italian spot!"
        />
      </SimpleGrid>
    </Container>
    </>
  );
};

export default ReviewsSection;
