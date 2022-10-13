import './App.css';
import React from 'react';
import { BrowserRouter as  Router ,Route,Routes} from 'react-router-dom';
import Navbar from './components/Nav-Bar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/profile'element={<Profile/>} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
