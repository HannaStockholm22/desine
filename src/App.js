import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import store from './red/state';



const App = () => {
  return (
    <div >
      <Navbar />
      <div >
        <Routes>
          <Route path="/about/*" element={<About />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
