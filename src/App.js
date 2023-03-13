import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact';

import ThemeContext from './context/ThemeContext';

//React 301
function App() {
  return (
    <ThemeContext.Provider value="light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
