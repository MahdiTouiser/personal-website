import { Box } from '@mui/material';
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);




  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Navbar
          scrollToRef={{
            introductionRef,
            aboutRef,
            projectsRef,
            contactRef
          }}
        />
        <Box id="introduction" ref={introductionRef}>
          <Introduction />
        </Box>
        <Box id="about" ref={aboutRef}>
          <About />
        </Box>
        <Box id="projects" ref={projectsRef}>
          <Projects />
        </Box>
        <Box id="contact" ref={contactRef}>
          <Contact />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
