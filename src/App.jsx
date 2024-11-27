import React from 'react';
import Catalog from './component/Catalog/Catalog';
import Header from './component/Header/Header';
import './App.css'
function MyAppComponent() {
  return (
    <div className='bodyApp'>
      <Header />
      <Catalog />
    </div>
  );
}

export default MyAppComponent;