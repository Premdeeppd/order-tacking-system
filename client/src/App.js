import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import GetCard from './components/GetCard';


function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get_card_status" element={<GetCard />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
