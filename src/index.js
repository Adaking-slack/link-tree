import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/Profile';
import Footer from './components/footer';
import Link from './components/links';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profile />
      <Link />
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
