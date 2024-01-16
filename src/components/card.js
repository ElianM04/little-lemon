
import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Text,
} from '@chakra-ui/react';



const PictureCard = ({ imageSrc, title, description }) => (
    <Box textAlign="center" p="4" >
      <Image src={imageSrc} alt={title} mb="4" borderRadius='lg'
/>
      <Text fontWeight="bold" fontSize="lg" mb="2" >
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );


  const PictureSection = () => {
    return (
        <>
        <Container>
        <Text fontSize='2xl' align='center' color='#495e57' pt='50px' fontFamily='Markazi Text'>This weeks specials  </Text>
        </Container>

      <Container maxW="container.lg" mt="8">
        <SimpleGrid columns={[1,null, 2, 3]} spacing="8">
          <PictureCard
            imageSrc="/greekSalad2.jpeg"
            title="greek salad"
            description=" A delightful blend of ripe tomatoes, crisp cucumbers, bell peppers, red onions, and Kalamata olives, topped with creamy feta cheese. Dressed in extra virgin olive oil, oregano, and a touch of lemon juice, this iconic Mediterranean dish is a refreshing celebration of vibrant flavors."
            
          />

          <PictureCard
          height='20px'
            imageSrc="/bruchetta.jpeg"
            title="Bruschetta:"
            description="Classic Italian appetizer featuring grilled bread rubbed with garlic, drizzled with olive oil, and topped with fresh ingredients like tomatoes, basil, and mozzarella. A delightful blend of simplicity and vibrant Mediterranean flavors."
          />
          <PictureCard
            imageSrc="desert.jpg"
            title="Card 3"
            description="Indulge in the exquisite delight of our homemade Lemon Cake. Moist and zesty, each bite is a burst of citrusy sunshine. The delicate balance of sweet and tangy flavors is a true testament to the art of baking. Topped with a velvety lemon glaze, this cake is a heavenly treat that lingers on the palate!"
          />
        </SimpleGrid>
      </Container>
      </>
    );
  };
  
  export default PictureSection;