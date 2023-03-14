import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';

import { useData } from '../src/context/ThemeContext';

export default function Container() { // I built the Container here because it's not possible to reach the context from the App.js file

  const { theme } = useData();

  return (
    <div className={`container ${theme}`}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}
