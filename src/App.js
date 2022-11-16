//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Nav from "./components/Nav";
// import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

const TITLE = 'Cole\'s Portfolio'

function App() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <Nav /> */}
      {/* <Contact />
      <About />
      <Projects /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
          <Contact/>
          <About/>
          <Projects/>
          </>}/>
          <Route path="*" element={<><PageNotFound/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
