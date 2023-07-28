import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from "./componets/head";
import App from './App';
import Footer from "./componets/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Head />
    <App />
    <Footer />
  </React.StrictMode>
);


