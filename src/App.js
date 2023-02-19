import './App.css';
import React, { createRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';




const App = ({state,dispatch}) => {

 //   height = Math.trunc(refComponent.current.getBoundingClientRect().height);
 
  return (
    <div className='wrapper' >
      <header className='header'>
      <Navbar data={state} />

      </header>
      <main className='main'>
        <Routes >
          <Route path="/" element={<Home data={state} dispatch={dispatch} />} />
          <Route path="/about/*" element={<About data={state.aboutPage} />} />
          <Route path="/gallery/*" element={<Gallery data={state} dispatch={dispatch} />} />
          <Route path="/home/*" element={<Home data={state} dispatch={dispatch} />} />
          <Route path="/blog/*" element={<Blog data={state} dispatch={dispatch} />} />
          <Route path="/contact/*" element={<Contact data={state} />} />
        </Routes>
      </main>
      <footer className='footer'>
        <Footer data={state.footerPart} dispatch={dispatch} />
      </footer>
    </div>
  );
}

export default App;
