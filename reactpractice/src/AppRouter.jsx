import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import NavigationBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Project';
import Contacts from './pages/Contact';
import './index.css'

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="d-flex flex-column w-full justify-content-center align-items-center myStyle">
        <Routes>
          <Route path="/React-Portfolio/" element={<Home />} />
          <Route path="/React-Portfolio/project" element={<Projects />} />
          <Route path="/React-Portfolio/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>

  );
};

export default AppRouter;