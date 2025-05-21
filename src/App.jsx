import React from 'react'
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (<>

  <Router>
      <nav>
        {/* Navigation Links */}
        {/* <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link> */}
      </nav>

      <Routes>
        {/* Page Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
      </Routes>
    </Router>
  {/* <Portfolio /> */}
  </>)
}

export default App;
