import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="#495e57"
      padding="20px"
      color="white"
      textAlign="center"
      position="sticky"
      bottom="0"
      left="0"
      width="100%"
    >
      {/* Add content for your footer */}
      © 2022 Your Company. All rights reserved.
    </Box>
  );
};

export default Footer;
