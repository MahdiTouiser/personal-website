import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <Introduction />
      </div>

    </Router>
  );
}

export default App;
