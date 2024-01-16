import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  Image,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack, // Added VStack from Chakra UI
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Nav = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box bg="white" p="4">
        <Flex alignItems="center">
          <ChakraLink as={Link} to="/" _hover={{ textDecor: 'none' }}>
            <Image
              src="logo2.png"
              alt="Logo"
              height="80px"
              objectFit="cover"
              cursor="pointer"
            />
          </ChakraLink>
          <Spacer />
          <Box display={{ base: 'none', md: 'flex' }}>
            {/* Normal links for larger screens */}
            <ChakraLink as={Link} to="/" color="black" mx="2">
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/about" color="black" mx="2">
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" color="black" mx="2">
              Contact
            </ChakraLink>
            <ChakraLink
              href="/menu.webp"
              target="_blank"
              rel="noopener noreferrer"
              color="black"
              mx="2"
            >
              Menu
            </ChakraLink>
            <ChakraLink as={Link} to="/reservations" color="black" mx="2">
              Reservations
            </ChakraLink>
          </Box>
          <Button colorScheme="teal" ml="2">
            Sign In
          </Button>
          <Box display={{ base: 'block', md: 'none' }}>
            {/* Hamburger icon for smaller screens */}
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              onClick={handleDrawerOpen}
            />
          </Box>
        </Flex>
      </Box>

      {/* Responsive Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              {/* Links for smaller screens */}
              <VStack align="start" spacing="4">
                <ChakraLink as={Link} to="/" onClick={handleDrawerClose}>
                  Home
                </ChakraLink>
                <ChakraLink as={Link} to="/about" onClick={handleDrawerClose}>
                  About
                </ChakraLink>
                <ChakraLink as={Link} to="/contact" onClick={handleDrawerClose}>
                  Contact
                </ChakraLink>
                <ChakraLink
                  href="/menu.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDrawerClose}
                >
                  Menu
                </ChakraLink>
                <ChakraLink as={Link} to="/reservations" onClick={handleDrawerClose}>
                  Reservations
                </ChakraLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Nav;
