// App.js
import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav';
import Home from './components/home';
import Contact from './components/contact';
import Menu from './components/menu';
import About from './components/About';
import Reservations from './components/reservations';
import '/Users/em/Desktop/little lemon/little/src/index.css'
import Footer from './footer';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Nav/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservations" element={<Reservations/>} />
       </Routes>
     </Router>
    <Footer/>
    </ChakraProvider>
  
  );
}

export default App;
