import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/common/Header";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
