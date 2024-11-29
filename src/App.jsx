import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Catalog from './component/Catalog/Catalog';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Page2 from './component/Pages/Page2';

import './App.css'

function MyAppComponent() {
  return (
    <Router>
      <div className="bodyApp">
        <Routes>
          <Route path="/" element={<><Header /><Catalog /></>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default MyAppComponent;