import { Box } from '@mui/material';
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);



  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Navbar
          scrollToRef={{
            introductionRef,
            aboutRef,
          }}
        />
        <Box id="introduction" ref={introductionRef}>
          <Introduction />
        </Box>
        <Box id="about" ref={aboutRef}>
          <About />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
