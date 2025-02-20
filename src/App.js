import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from "./components/common/Header";
import './App.css';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
