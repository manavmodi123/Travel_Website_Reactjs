import './App.css';
import Navbar from './components/Navbar.js';
import Home from './routes/Home.js';
import About from './routes/About.js';
import Contact from './routes/Contact.js';
import Service from './routes/Service.js'; // Corrected import
import SignUp from './routes/Signup.js'; // Corrected import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} /> {/* Added route for Service */}
        
      </Routes>
    </Router>
  );
}

export default App;
