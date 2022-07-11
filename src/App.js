import React from 'react';
import { Home, Achievements, Skills, Experiences, Projects, Contact } from './pages';
import { Navbar } from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/personal-website" element={ <Home/> } />
          <Route path="/personal-website/achievements" element={ <Achievements/> } />
          <Route path="/personal-website/skills" element={ <Skills/> } />
          <Route path="/personal-website/experiences" element={ <Experiences/> } />
          <Route path="/personal-website/projects" element={ <Projects/> } />
          <Route path="/personal-website/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App