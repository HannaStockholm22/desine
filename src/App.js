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




const App = (props) => {

  return (
    <div className='wrapper'>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Routes >
          <Route path="/about/*" element={<About data={props.state.aboutPage}/>} />
          <Route path="/gallery/*" element={<Gallery data={props.state} dispatch={props.dispatch}/>} />
          <Route path="/home/*" element={<Home data={props.state} dispatch={props.dispatch} />} />
          <Route path="/blog/*" element={<Blog data={props.state} dispatch={props.dispatch}/>} />
          <Route path="/contact/*" element={<Contact  data={props.state}/>} />
        </Routes>
      </main>
      <footer className='footer'>
        <Footer data={props.state.footerPart} dispatch={props.dispatch} />
      </footer>
    </div>
  );
}

export default App;
