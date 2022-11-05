import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './components/contact';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Footer from './components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/contact" element={<Contact />} />
  <Route path='/' element={< Footer/>} />
 
  </Routes>
<Footer />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
