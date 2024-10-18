import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import projects from './projects.json';

const App = () => {

  const navLinks = [
    { path: '/portfolio', text: 'portfolio' }
  ];

  return (
    <Router>
      <Header logoText='JF' navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Projects projects={projects} />} />
      </Routes>
    </Router>
  );
};

export default App;