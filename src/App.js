//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const TITLE = 'Cole\'s Portfolio'

function App() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <Nav /> */}
      <Contact />
      <About />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
