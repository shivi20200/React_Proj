import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import MyLearning from './pages/MyLearning';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/details" element={<Home showDetails />} /> 
        <Route path="/my-learning" element={<MyLearning />} />
      </Routes>
    </Router>
  );
}

export default App;



