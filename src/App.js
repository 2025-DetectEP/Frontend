import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from "./components/common/Header";
import Footer from './components/common/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Header/>
        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
