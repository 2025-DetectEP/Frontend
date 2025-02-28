import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Header from "./components/common/Header";
import Footer from './components/common/Footer';
import Home from './pages/Home/Home';
import PostAnalysis from './pages/PostAnalysis/PostAnalysis';
import CheckList from './pages/CheckList/CheckList';

function App() {
  useEffect(() => {
    // const handleResize = () => {
    //   if(window.innerWidth < 580) {
    //     document.body.style.width = "580px";
    //   } else {
    //     document.body.style.width = "auto";
    //   }
    // };
    // window.addEventListener("resize", handleResize);
  
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);
  
  return (
    <AuthProvider>
      <div className="app">
        <Header/>
        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-analysis" element={<PostAnalysis />} />
            <Route path="/check-list" element={<CheckList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
