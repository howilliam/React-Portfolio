import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './pages/Header';
import NavigationBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="d-flex min-vh-100 w-full justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>

  );
};

export default AppRouter;