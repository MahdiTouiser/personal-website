import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Box className='app-container'>
        <Navbar />
        <section id="introduction" className="section">
          <Introduction />
        </section>
        <section id="about" className="section">
          <About />
        </section>
      </Box>
    </Router>
  );
}

export default App;
